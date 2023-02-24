let cl = console.log;

const nums = [1, -5, 2, 1, 10, 21, -2];

function findLargestSum(arr) {
    let largestSum = 0;
    let runningTotal = 0;
    
    for (let i = 0; i < arr.length; i++) {
      runningTotal += arr[i];
      if (runningTotal > largestSum) {
        largestSum = runningTotal;
      }
      if (runningTotal < 0) {
        runningTotal = 0;
      }
    }
    
    return largestSum;
  }
  
cl(findLargestSum(nums))