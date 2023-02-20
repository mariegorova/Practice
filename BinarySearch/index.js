// let array = [1, 7, 14, 21, 24, 29, 37, 46, 72, 81]

// function linearSearch(arr, findElement) {
//   for (let i = 0; i <= arr.length-1; i++) {
//     if (arr[i] === findElement) {
//       return i;
//     }
//   }

//   return -1;

// }

function binarySearch(arr, findElement) {
  let first = 0;
  let mid = Math.floor((first + last) / 2);
  let last = arr.length - 1;

  while (first <= last) {
    if (arr[mid] === findElement) {
      return mid;
    } else if (arr[mid] < findElement) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  return -1;
  }
}

