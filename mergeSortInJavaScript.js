const arr = [6, 3, 1, 2];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right)
}


console.log(mergeSort(arr));

function merge(left, right) {
  let i = 0, j = 0, pointer = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      // result[pointer++] = left[i++];
      result.push(left[i++])
    } else {
      // result[pointer++] = right[j++]
      result.push(right[j++])
    }
  }

  while (i < left.length) {
    // result[pointer++] = left[i++]
    result.push(left[i++])
  }
  while (j < right.length) {
    // result[pointer++] = right[j++]
    result.push(right[j++])
  }
  
  return result;
}
