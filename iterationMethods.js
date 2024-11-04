//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const filterdArray = numbers.filter(function (number) {
  if (number >= 25) {
    return true;
  } else {
    return false;
  }
});

console.log(filterdArray);
const divisibleBy5 = numbers.filter(function (number) {
  if (number % 5) {
    return false;
  } else {
    return true;
  }
});
console.log(divisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squaredNum = numbers.map(function (number) {
  return number ** 2;
});

console.log(squaredNum);

const multipliedBy2 = numbers.map(function (number) {
  return number * 2;
});
console.log(multipliedBy2);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const filteringSquaring = numbers
  .filter(function (number) {
    if (number >= 20) {
      return true;
    } else {
      return false;
    }
  })
  .map(function (number) {
    return number ** 2;
  });
console.log(filteringSquaring);

const fDivisible = numbers
  .filter(function (number) {
    if (number % 5) {
      return false;
    } else {
      return true;
    }
  })
  .map(function (number) {
    return number * 3;
  });

console.log(fDivisible);
