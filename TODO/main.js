"use strict";
{
  // const todos = [
  //   { title: "aaa", isCompleted: false },
  //   { title: "bbb", isCompleted: true },
  //   { title: "ccc", isCompleted: false },
  // ];

  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // 描画 個々
  const renderTodo = (todo) => {
    /*
    - li
     - label
       - input
       - span
     - button
    */

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isCompleted;
    input.addEventListener("change", () => {
      todos.forEach((item) => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted;
        }
      });
      saveTodos();
    });

    const span = document.createElement("span");
    console.log(todo.title);
    span.textContent = todo.title;

    const label = document.createElement("label");
    label.appendChild(input);
    label.appendChild(span);

    const button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click", () => {
      if (!confirm("sure????")) {
        return;
      }
      li.remove();
      todos = todos.filter((item) => {
        return item.id !== todo.id;
      });
      saveTodos();
    });

    const li = document.createElement("li");
    li.appendChild(label);
    li.appendChild(button);

    document.querySelector("#todos").appendChild(li);
  };

  // 描画　複数
  const renderTodos = () => {
    todos.forEach((todo) => {
      // 個々のTODOを描画する
      renderTodo(todo);
    });
  };

  document.querySelector("#add-form").addEventListener("submit", (e) => {
    // ページ遷移しないように
    e.preventDefault();
    const input = document.querySelector("#add-form input");
    const todo = {
      id: Date.now(),
      title: input.value,
      isCompleted: false,
    };
    renderTodo(todo);
    // 入力した項目のクリア
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    input.focus();
  });

  document.querySelector("#purge").addEventListener("click", () => {
    if (!confirm("sure????")) {
      return;
    }
    todos = todos.filter((todo) => {
      return todo.isCompleted === false;
    });
    saveTodos();
    document.querySelectorAll("#todos li").forEach((li) => {
      li.remove();
    });
    renderTodo();
  });

  renderTodos();
  // 設定できるのは文字列のみ オブジェクトは不可 JSON形式で管理する
  // localStorage.setItem("todos", JSON.stringify(todos));
  // console.log(JSON.parse(localStorage.getItem("todos")));
}
