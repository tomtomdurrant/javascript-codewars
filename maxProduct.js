function maxProduct(numbers, size) {
  numbers.sort(function(a, b) {
    return a - b;
  });

  let newArray = numbers.slice(-size);
  let maxProduct = newArray.reduce((accumulator, currentvalue) => {
    return accumulator * currentvalue;
  });
  return maxProduct;
}

console.log(maxProduct([9, 6, 2], 2));
console.log(maxProduct([4, 3, 5], 2));
