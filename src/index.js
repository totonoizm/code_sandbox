// // var val1 = "val変数";
// // console.log(val1);
// // var val1 = "val数";
// // console.log(val1);
// // var val1 = "va数";
// // console.log(val1);

// // let val2 = "let変数";
// // console.log(val2);
// // // 上書きできる

// // val2 = "hoge";
// // console.log(val2);

// // const val3 = "const変数";
// // console.log(val3);

// // const val4 = {
// //   name: "yamada",
// //   age: 22
// // };
// // val4.addres = "totonoi";
// // console.log(val4);

// // const val5 = ["cat", "dog"];
// // val5[0] = "bird";
// // val5.push("monky");
// // console.log(val5);

// // const name = "yamada";
// // const age = 24;

// // const message1 = "my name is " + name + "Im" + age;
// // console.log(message1);

// // テンプレート文字列ってのがある

// // const message2 = `Mynameis${name}.im${age}.`;
// // console.log(message2);

// // アロー関数

// const func1 = function func1(str) {
//   return str;
// };

// console.log(func1("func1です"));

// // const func2 = str => str;

// // console.log(func2("func2desu"))

// // const func3 = (num1, num2) => num1 + num2;

// // console.log(func3(10,20));

// // // 分割代入

// // const myprofile = {
// //   name: "yamda",
// //   age: 23,
// // };
// // const message3 = `namaeha${myprofile.name}de${myprofile.age}`;

// // console.log(message3);

// // const { name, age } = myprofile;
// // const message4 = `namaeha${name}de${age}`;
// // console.log(message4);

// const myProfile = ["yamada", 33];

// // const message3 = `namaeha${myProfile[0]},age${myProfile[1]}`;
// // console.log(message3);

// // const [name , age] = myProfile;
// // const message4 = `${name}`;

// // デフォルト値

// // const sayhello = (name = "gesut") => console.log(`こんにちは${name}`);
// // sayhello("oira");

// // スプレッド構文　... 要素が順番に処理されていく

// // 配列の展開
// // const array = [1,2];
// // // console.log(array);
// // // console.log(...array);

// // const sumFunc = (num1,num2) => console.log(num1 + num2);
// // sumFunc(array[0],array[1]);

// // sumFunc(...array);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 1000;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // const arr8 = arr4;
// // console.log(arr8);
// // arr8[0] = 100;
// // console.log(arr4
// //   )

// // map filterを使った配列処理

// // for文

const nameArr = ["田中", "honda", "山田"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index}番目は${nameArr[index]}`);
}

// // map
const nameArr2 = nameArr.map((name) => {
  return name;
});
// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// fileter文
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});

console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "honda") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// 三項演算子

// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "og";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
};
console.log(checkSum(50, 90));
