function largestOfFour(arr) {
  var maxArray = [];
  // iterate over the array
  for(var i = 0; i < arr.length; i++) {
    var maxSeen = 0;
    // iterate over the sub-array
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > maxSeen) {
        maxSeen = arr[i][j];
      }
    }
    maxArray.push(maxSeen);
  }
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);