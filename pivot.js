function fnPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      console.log(arr);
    }
  }
  swap(arr, start, swapIndex);
  console.log('end', arr);
  return swapIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const res = fnPivot([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(res);
// [1, 2, 3, 4, 5, 6, 7, 8]
