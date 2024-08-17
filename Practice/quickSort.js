const a = [9, 5, 3, 6];
// [6, 5, 3, 9] - pivot index is 3
// [3, 5, 6 ] -> pivot index is 2
// [3, 5] -> pivot index 0
//finally we have [3, 5, 6, 9 ]

function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = getPivot(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function getPivot(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = 0;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSort(a, 0, a.length - 1);
// getPivot(a, 0, a.length - 1);

console.log(a);
