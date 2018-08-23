function chunkArrayInGroups(arr, size) {
  // Break it up.
  var returnArray = [];
  
  var count = 0;
  var increment = size;
  // var sizeIncrement = size;
  while(count < arr.length) {
    console.log(size);
    
    returnArray.push(arr.slice(count, size));
    count += increment;
    size += increment;
  }
  
  return returnArray;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));