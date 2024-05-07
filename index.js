function rob(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (const num of nums) {
    const temp = currMax;
    currMax = Math.max(prevMax + num, currMax);
    prevMax = temp;
  }
  return currMax;
}
