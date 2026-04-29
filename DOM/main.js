"use strict";

{
  // イベントリスナー
  document.querySelector("button").addEventListener("click", () => {
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

  // ドロップダウンリストの取得
  alert(document.querySelector('select').value);











  });
}
