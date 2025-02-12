function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(5, 80);

function add2(price1, price2) {
  return price1 + price2;
}

const bill2 = add2(5, 80);

console.log(bill, bill2);

function domath(number1, number2) {
  const sum = number1 + number2;
  const minus = number1 - number2;
  const multi = sum * minus;
  const divided = multi / 2;
  return divided;
}

const result = domath(10, 5);
console.log(result);
