const a1 = [4, 2, 6, 1];
const a2 = [9, 3, 7, 5];

const mergedSortedArray = [];

// merging

for (let i = 0; i < a1.length; i++) {
  mergedSortedArray.push(a1[i]);
}

for (let i = 0; i < a2.length; i++) {
  mergedSortedArray.push(a2[i]);
}

function mergeSort(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    console.log('at last', start, end);
    // fnSort(arr);
    fnSort(arr, start, mid, end);
  } else {
    console.log(start, end);
  }
}

function fnSort(arr, left, leftEnd, right) {
  let first = left,
    second = leftEnd + 1,
    tempStart = left;
  const resultArr = Array(arr.length).fill(0);
  // [2, 4] [1,6]
  // 2, 1 --- 3, 3
  while (first <= leftEnd && second <= right) {
    if (arr[first] < arr[second]) {
      resultArr[tempStart++] = arr[first++];
    } else {
      resultArr[tempStart++] = arr[second++];
    }
  }

  printArr(resultArr, left, right);
  if (first > leftEnd) {
    while (second <= right) {
      console.log('yes1', second, right);
      resultArr[tempStart++] = arr[second++];
    }
  } else {
    while (first <= leftEnd) {
      console.log('yes2', first, leftEnd);
      resultArr[tempStart++] = arr[first++];
    }
  }

  for (let i = left; i <= right; i++) {
    arr[i] = resultArr[i];
  }
  printArr(resultArr, left, right);
}

mergeSort(a1, 0, a1.length - 1);

console.log(a1);

function printArr(arr, left, right) {
  let str = '';
  for (let i = left; i <= right; i++) {
    str += ' ' + arr[i];
  }
  console.log('printing temp array');
  console.log(str);
}
