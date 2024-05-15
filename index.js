const cycleSort = (arr) => {
  for (let start = 0; start < arr.length - 1; start++) {
    let item = arr[start];
    let pos = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }
    if (pos === start) {
      continue;
    }
    while (item === arr[pos]) {
      pos++;
    }
    if (pos !== start) {
      [item, arr[pos]] = [arr[pos], item];
    }
    while (pos !== start) {
      pos = start;
      for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      while (item === arr[pos]) {
        pos++;
      }
      if (item !== arr[pos]) {
        [item, arr[pos]] = [arr[pos], item];
      }
    }
  }
  return arr;
};
