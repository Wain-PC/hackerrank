const solve = (arr) => {
  let count = 0;
  const merge = (ar, left, middle, right) => {
    let i = left;
    let j = middle + 1;
    const tmp = [];
    while (i < middle && j < right) {
      if (ar[i] > ar[j]) {
        tmp.push(ar[j]);
        j++;
        count += middle - i + 1; // Tricky part.
      } else {
        tmp.push(ar[i]);
        i++;
      }
    }
    ar.splice(left, right - left, ...tmp.concat(ar.slice(i, middle), arr.slice(j, right)));
  };

  const mergeSort = (ar, left = 0, right = ar.length - 1) => {
    if (left >= right) {
      return;
    }
    const middle = Math.floor((right + left) / 2);
    mergeSort(ar, left, middle);
    mergeSort(ar, middle + 1, right);
    merge(ar, left, middle, right);
  };

  mergeSort(arr);
  return count;
};


module.exports = { solve };
