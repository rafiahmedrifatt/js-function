function doubleIt(number) {
  const double = number * 2;
  console.log(number, double);
}

console.log("I will call the function");
doubleIt(12);
console.log("--------------------");
doubleIt(88);
console.log("--------------------");
doubleIt(873);
const number = 55;
doubleIt(number);
const money = 112;
doubleIt(money);

//
function difference(number1, number2) {
  const diff = number1 - number2;
  console.log(number1, number2, "difference is", diff);
}

const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);
