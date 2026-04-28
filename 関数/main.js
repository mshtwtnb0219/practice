"use strict";

{
  //   function double(num) {
  //     return num * 2;
  //   }

  //   console.log(double(10));
  //   console.log(double(4) * 3);

  //   function sum(a, b) {
  //     return a + b;
  //   }

  //   console.log(sum(10, 20));

  //   function sum(a, b) {
  //     console.log(a + b);
  //     return undefined;
  //   }

  //   console.log(sum(10, 20) * 3);

  // function claculateTonal(price, amount, rate = 1.1) {
  //   return price * amount * rate;
  // }
  // console.log(claculateTonal(100, 10));
  // console.log(claculateTonal(100, 10, 1.08));

  // showAd();
  // showContent();
  // showAd();

  // function showAd() {
  //   console.log("---------");
  //   console.log("SALE! 50% OFF!");
  //   console.log("---------");
  // }

  // function showContent() {
  //   console.log("BREAKING NEWS!");
  //   console.log("Two baby pandas born at our Zoo!");
  // }

  // 関数宣言
  //   function double (num)
  //  {
  //   return num * 2;
  //  }

  // 関数式　無名関数
  // const double = function(num) {
  //   return num * 2;
  // };

  // アロー関数
  const double = (num) => {
    return num * 2;
  }

  const calc = (num, func) => {
    return func(num);
  }

  console.log(calc(20, double));
  console.log(calc(20, (num) => { return num * 3; }));




  // const double = num => num * 2;

  // const test = () => {
  //   return "test";
  // }

  // console.log(double(10));
}
