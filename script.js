 console.log("Hello");

var temperature = -03;

console.log(((temperature - 32)/1.8)+ " degrees");


for (var i=1; i <= 100; i++) {

if (i % 3 === 0 && i % 5 ===0) {
  console.log("FizzBuzz");
} else if (i % 3 === 0) {
  console.log("Fizz");
} else if (i % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(i);
}
}
