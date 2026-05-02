"use strict";

{
  //   class Score {
  //     constructor(subject, value) {
  //       this.subject = subject;
  //       this.value = value;
  //     }

  //     getGrade() {
  //       return this.value >= 80 ? "A" : "B";
  //     }

  //     getScoreString() {
  //       return `${this.subject}: ${this.value} (${this.getGrade()})`;
  //     }
  //   }

  //   class MathScore extends Score {
  //     constructor(value) {
  //       super("Math", value);
  //     }

  //     getGrade() {
  //       return this.value >= 50 ? "A" : "B";
  //     }
  //   }

  //   class EnglishScore extends Score {
  //     constructor(value) {
  //       super("English", value);
  //     }
  //   }

  class User {
    // プロパティ
    name;
    #score;

    // static count = 0;

    constructor(name, score) {
      this.name = name;
      this.score = score;
      //   User.count++;
    }

    get score() {
        return this._score;
    }

    isValidScore(value) {
        return typeof value === "number" && value >= 0 && value <= 100;
    }

    set score(value) {
        this._score = value;
    }

    getUserString() {
      return `name: ${this.name}, score: ${this.score}`;
    }

    // static getUserString() {
    //   return `count: ${User.count}`;
    // }
  }

  // インスタンスの作成
  const user1 = new User("Taro", 40);
  console.log(user1.getUserString());

  const user2 = new User("Hanako", 70);
  console.log(user2.getUserString());
  // 外部からscoreプロパティにアクセスして値を変更
  user1.#score = 999;
  //   console.log(User.getUserString());
}
