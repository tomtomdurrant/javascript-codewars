function getCount(str) {
  var vowelsCount = 0;
  let array = str.split("");
  array.forEach(element => {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

console.log(getCount("abracadabra"));
console.log(getCount("aeiou"));
