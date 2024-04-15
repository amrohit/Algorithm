const arr = [23, 43, 3, 5];
function sortIt(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log('j', j, JSON.parse(JSON.stringify(arr)));
    }
    console.log('i', i, JSON.parse(JSON.stringify(arr)));
  }
}
sortIt(arr);
console.log(arr);
