function positiveSum(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
      count += arr[i];
      }
     }
     return count;
  }//hello
