const a = [9, 5, 3, 6];
const b = [2, 1, 7, 4];
const mergedArr = [];

for (let i = 0; i < a.length; i++) {
  mergedArr.push(a[i]);
}

for (let i = 0; i < b.length; i++) {
  mergedArr.push(b[i]);
}

function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

function merge(arr, start, startEnd, end) {
  const tempArr = Array(arr.length).fill(0);
  let p = (first = start),
    second = startEnd + 1;

  while (first <= startEnd && second <= end) {
    if (arr[first] < arr[second]) {
      tempArr[p++] = arr[first++];
    } else {
      tempArr[p++] = arr[second++];
    }
  }

  if (first > startEnd) {
    while (second <= end) {
      tempArr[p++] = arr[second++];
    }
  } else {
    while (first <= startEnd) {
      tempArr[p++] = arr[first++];
    }
  }

  for (let i = start; i <= end; i++) {
    arr[i] = tempArr[i];
  }
}

mergeSort(mergedArr, 0, mergedArr.length - 1);

console.log(mergedArr);
