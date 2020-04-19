var summation = function(num) {
  let runningTotal = 0;
  for (let i = 0; i <= num; i++) {
    runningTotal += i;
  }
  return runningTotal;
};

console.log(summation(8));
