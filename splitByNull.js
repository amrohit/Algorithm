// input -> [5, 6, null, 89, 45, null, 56, null]
// output -> [[5, 6], [89, 45], [56]]

// Iterate: if arr[i] != null, new array.push()

function splitArrayByNull(arr) {
  const finalArray = [];
  let arrToPush = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      arrToPush.push(arr[i]);
    } else {
      if (arrToPush.length !== 0) {
        finalArray.push(arrToPush);
        arrToPush = [];
      }
    }
  }
  console.log(finalArray);
}

splitArrayByNull([5, 6, null, 89, 45, null, 56, null]);
