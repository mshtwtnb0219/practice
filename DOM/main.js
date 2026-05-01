"use strict";

{
  // イベントリスナー
  // document.querySelector("button").addEventListener("click", () => {
    // テキストコンテンツ
    // document.querySelector("p").textContent = "こんにちは！";

    // CSSスタイル変更
    // document.querySelector('p').classList.add('pnk-bg', 'red-border');
    // document.querySelector('p').classList.remove('green-color');

    // if (document.querySelector('p').classList.contains('pink-bg') === false) {
    //   document.querySelector('p').classList.add('pink-bg');
    // } else {
    //   document.querySelector('p').classList.remove('pink-bg');
    // }

    // css　クラスのトグル
    // document.querySelector('p').classList.toggle('pink-bg');
    // document.querySelector('#second').textContent = '変更された1';

    // 複数の要素の取得
    // document.querySelectorAll('li')[0].textContent = '変更された';
    // document.querySelectorAll('li')[1].textContent = '変更された';
    // document.querySelectorAll('li')[2].textContent = '変更された';
    // document.querySelectorAll('.target').forEach((item) => {
    //     item.textContent = '変更された';
    // })

    // 要素の作成
    // const liElement = document.createElement("li");
    // liElement.textContent = "追加された";
    // document.querySelector('ul').appendChild(liElement); // 末尾に追加
    // document
    //   .querySelector("ul")
    //   .insertBefore(liElement, document.querySelector('#second')); // 指定した要素の前に追加

    // if (confirm("削除しますか?") === true) {
    //   document.querySelector("#second").remove();
    // }

    // form部品の処理
    // alert(document.querySelector("input").value)
    // alert(document.querySelector("textarea").value);
    // document.querySelector("textarea").value = '';

    // ドロップダウンリストの取得 value属性の値が取得される
    // alert(document.querySelector('select').value);

    // ラジオボタンで選択された値を取得する
    // document.querySelectorAll("input").forEach((radio) => {
    //   radio.checked === true ? alert(radio.value) : null;
    // });

    // チェックボックスで選択された値を取得する
    // const colors = [];
    // document.querySelectorAll("input").forEach((check) => {
    //   if (check.checked === true) {
    //     colors.push(check.value);
    //   }
    // });
    // alert(colors.join(","));

  // });




    // 入力部品の値が変更された際のイベント
    // document.querySelector('input').addEventListener( 'input', ()  => {
    //   const pElement = document.querySelector('p');
    //   const inputElement = document.querySelector('input');
    //   pElement.textContent = inputElement.value.length;
    // });


    // フォーカス　ブラー
    // document.querySelector('input').addEventListener('focus', () => {
    //   document.querySelector('p').textContent = '入力してください';
    // });

    //     document.querySelector('input').addEventListener('blur', () => {
    //   document.querySelector('p').textContent = '';
    // });

    // document.querySelector('input').focus(); // フォーカスを当てる


    // keyが押下された際のイベント
    // document.addEventListener('keydown', (e) => {
    //   // 入力されたkeyを取得
    //   document.querySelector('p').textContent = e.key;

    // })

    // マウスイベント
    // document.addEventListener('mousemove', (e) => {
    //   document.querySelector('p').textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
    // })

    // フォームタグのイベント enterキーにも対応している
    // document.querySelector('form').addEventListener('submit', (e) => {
    //   e.preventDefault(); // 送信のキャンセル
    //   document.querySelector('p').textContent = document.querySelector('input').value;

    // })


    // style属性の操作
        document.querySelector('button').addEventListener('click', () => {
          //  document.querySelector('p').style = 'font-size: 30px';
           document.querySelector('p').style.fontSize = '30px';




        });


}
