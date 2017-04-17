//  console.log("Hello");
//temp
// var temperature = 48;
//
// console.log(((temperature - 32)/1.8)+ " degrees");

// //fizzbuzz
// for (var i=1; i <= 100; i++) {
//
// if (i % 3 === 0 && i % 5 ===0) {
//   console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//   console.log("Fizz");
// } else if (i % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(i);
// }
// }
//
// //clothing event
// var event = ""
// var clothing = ""
// var coat = ""
// var temp = ""
//
// if (event === "casual") {
//   clothing = "somthing comfy";
// } else if (event === "semi-formal") {
//   clothing = "a button up";
// } esle (event === formal) {
//   clothing = "a suit";
// }
//
// if (temp  < 60 ) {
//   coat = "no jacket";
// }
// if (temp > 60 ) {
//   coat = "";
// }
// if (temp > 70 || temp <54 ) {
//   coat = "";
// }
//
// console.log("since it is " + temp + clothing + coat);
//
// //loops
// for( var i=1; i<=10; i++) {
// console.log("It's Friday!!!");
// }
//
var number;

do {
  number = prompt("what number am I thinking of between 1-10?");
} while(number = 6);
console.log("you got it!");
//
// //array
// var numbers = [1,1,2,3,5,8];
// var total = 0;
// numbers.forEach(function(i){
//   total +=i
// });
//   console.log(total);

// //longer name
// var name1="Kim Possible";
// var name2="Ron Stoppable";
//
// if(name1.length < name2.length) {
//   console.log("Ron has the longer name.");
// } else {
//   console.log("Kim has the longer name.");
// }

// //sum of
// var numbers=[1,1,2,3,5,8];
// var sum=0
//
// numbers.forEach(function(num){
//   (sum += num);
//
// }); console.log(sum);

// //longest name doctor who
// var names=["Rose", "Martha", "Donna", "Amy", "Clara", "Bill"];
// var longest=" ";
//
// names.forEach(function(name) {
//   if(name.length > longest.length){
//     longest=name;
//     }
// });
//
// console.log(longest);
//
// //function ex8
// function add(num1, num2) {
//   return num1 + num2;
// }
//
// var total=add(2,4);
//
// console.log(total);
//
// //function ex9
// function add(num1, num2) {
//   return num1 + num2;
// }
// var total=add(7,19);
// console.log(total);
//
// //function ex7
// function add(number1, number2) {
// 	return number1 + number2;
// }

// //function
// function printWith(item1,item2){
//  console.log("A " + item1 + " with " + item2 + ".");
// }
//
// printWith("hotdog","chili");
//
// printWith("smoothie","strawberries")

// //temp converter.2
// function convertTemp(temp1, unit2) {
//  if (unit2 === "C" ){
//   console.log((temp1 -32) * 5/9);
// } else if (unit2 === "F"){
//   console.log(temp1 * (9/5) +32);
// }}
//
// convertTemp(212, "C");
// convertTemp(32, "C");
// convertTemp(65, "C");
// convertTemp(0, "F");

// //capitalize first letter
// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
//
// "what a fine day!".capitalize();
// "aWESOME!".capitalize();
