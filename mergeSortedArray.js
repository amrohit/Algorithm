const a1 = [1, 3, 6];
const a2 = [2, 4, 5];

function mergeSortedArr(a1, a2) {
  const output = Array(a1.length + a2.length).fill(0);
  console.log(output);
  let i = 0,
    j = 0,
    pointer = 0;
  while (i < a1.length && j < a2.length) {
    console.log(a1[i], '<', a2[j]);
    if (a1[i] < a2[j]) {
      output[pointer++] = a1[i++];
      // i++;
    } else {
      output[pointer++] = a2[j++];
      // j++
    }
    // pointer++
  }
  console.log(output, i, j , pointer);
  if (i > a1.length) {
    while (j < a2.length) {
      output[pointer++] = a2[j++];
    }
  } else {
    while (i < a1.length) {
      output[pointer++] = a1[i++];
    }
  }
  console.log(output);
}

mergeSortedArr(a1, a2); // [ 1, 2, 3, 4, 5, 6 ]
