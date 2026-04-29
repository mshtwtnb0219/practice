"use strict";

{
  // 配列
  //   const scores = [80, 100, 30, 90, 40];
  // console.log(scores);
  // scores[1] = 99;
  // console.log(scores[1]);
  // console.log(scores.length);
  // scores.push(100);
  // console.log(scores);
  // scores.pop();
  // console.log(scores);
  //   for (let i = 0; i < scores.length; i++) {
  //     console.log(`Score ${i}: ${scores[i]}`);
  //   }
  //   scores.forEach((socre, index) => {
  //     console.log(`Score ${index}: ${socre}`);
  //   })
  // let sum = 0;
  // scores.forEach((num, index) => {
  //     sum += num;
  //     console.log(`Score ${index}: ${num}`);
  // })
  // console.log(`Sum: ${sum}`);
  // console.log(`Average: ${sum / scores.length}`);
  // オブジェクト
  // const scores = {
  //   math: 80,
  //   english: 80,
  // };
  // let sum = 0;
  // const entries =Object.entries(scores);
  // entries.forEach((prop)=> {
  //   sum += prop[1];
  //   console.log(`${prop[0]}: ${prop[1]}`);
  // })
  // console.log(sum);
  // console.log(sum / entries.length);
  // scores.physics = 70;
  // console.log(scores);
  // delete scores.english;
  // console.log(scores);
  // 配列の操作
  // const scores = [80, 100, 30, 90];
  // scores.splice(2, 0, 70, 60);
  // console.log(scores);
  // 配列と文字列の相互変換
  // const names = ["Alice", "Bob", "Charlie"];
  // console.log(names.join("|"));
  // console.log(names.join());
  // console.log(names.join(""));
  // const names1 = "Alice|Bob|Charlie";
  // console.log(names1.split("|"));
  // 配列から新しい配列を作成する
  // const prices = [100, 150, 200];
  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // })
  // map
  // const pricesWithTax = prices.map((price) => {
  //   return price * 1.1;
  // })
  //  console.log(pricesWithTax);
  // const priceOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     priceOver150.push(price);
  //   }
  // });
  // console.log(priceOver150);
  // filter
  // const priceOver150 = prices.filter((price) => {
  //   return price >= 150;
  // });
  // console.log(priceOver150);
  // 分割代入
  // const scores = [80, 100, 30, 90];
  // const [first, second, third, fourth] = scores;
  // console.log(first);
  // 分割代入 値の入れ替え
  // let start = 'Tokyo';
  // let goal = 'Osaka';
  // [start, goal] = [goal, start];
  // console.log(start);
  // console.log(goal);
  // レスト構文(左辺)   // スプレット構文(右辺)
  // const moreScores = [80, 100];
  // const scores = [80, 100, 30, 90, ...moreScores];
  // const [first, ...others] = scores;
  // console.log(others);
  // オブジェクト 分割代入 レスト構文(左辺)  スプレット構文(右辺)
  // const moreScores = {
  //   shiro: 80,
  //   wata: 90,
  // };
  // const scores = {
  //   taro: 80,
  //   hanako: 100,
  //   jiro: 30,
  //   ...moreScores
  // };
  // const { taro, hanako,jiro} = scores;
  // const { taro, ...others} = scores;
  // console.log(taro);
  // console.log(others);


  // 値のバックアップ
  // let num = 10;
  // const numbackup = num;
  // num = 99;
  // console.log(num);
  // console.log(numbackup);

  const nums = [10, 20, 30];
  // const numsbackup = nums;
  const numsbackup = [...nums]; // スプレット構文で配列を展開して新しい配列を作成する
  nums[0] = 99;
  console.log(nums);
  console.log(numsbackup);


}
