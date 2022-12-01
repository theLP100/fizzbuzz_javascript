export const fizzBuzz = (num) => {
  console.log(`I got to this point and num is ${num}`);
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else {
    return num;
  }
};
