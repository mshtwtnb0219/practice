"use strict";
{
  function showHeader() {
    console.log("--- Header ---");
  }

  // 関数式
//   const showUsers = async () => {
//     // 非同期処理
//     try {
//       const response = await fetch(
//         "https://dotinstall.github.io/setup/fetchapi/users.json",
//       );
//       const users = await response.json();
//       console.log(users);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  function showUsers1() {
    fetch("https://dotinstall.github.io/setup/fetchapi/users.json")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showFooter() {
    console.log("--- Footer ---");
  }

  showHeader();
  showUsers1();
  showFooter();
}
