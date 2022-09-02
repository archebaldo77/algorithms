// Сложность O(log(n));

const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    const value = arr[middle];

    if (item == value) {
      return middle;
    }

    if (item < value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};
