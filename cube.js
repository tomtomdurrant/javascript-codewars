function findNb(m) {
  let runningTotal = 0;
  let index = 0;
  while (runningTotal < m) {
    runningTotal += index * index * index;
    if (runningTotal === m) return index;
    if (runningTotal > m) return -1;
    index++;
  }
  return index;
}

console.log(findNb(91716553919377));
