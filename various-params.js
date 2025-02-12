/**
 *
 *for a given number tell me whether it has even number of characters or not
 *
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("str even size");
    return true;
  } else {
    console.log("str odd size");
    return false;
  }
}

// evenSizedString("haka");
// evenSizedString("dhaka");

function doubleOrTripple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(5, false));

function numberOfElements(numbers) {
  const length = numbers.length;
  return length;
}

// numberOfElements([12, 23, 34, 45, 56, 67, 78, 78, 87, 56, 45, 45, 67]);

function getAge(person) {
  const age = person.age;
  return age;
}
