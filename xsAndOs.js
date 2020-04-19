function XO(str) {
  let stringAsArray = str.toLowerCase().split("");
  let xArray = stringAsArray.filter(e => e === "x");
  let oArray = stringAsArray.filter(e => e === "o");
  return xArray.length === oArray.length;
}

console.log(XO("xoxoxo"));
console.log(XO("yyyo"));
