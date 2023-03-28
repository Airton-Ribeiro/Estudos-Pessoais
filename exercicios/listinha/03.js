function FizzBuzz(number) {

    if (typeof number !== 'number') {
      return number;
    }
    else if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else if (number % 5 !== 0 || number % 3 !== 0) {
      return number;
}
}
for (let i = 0; i <= 100; i++){
  console.log(i, FizzBuzz(i));
}