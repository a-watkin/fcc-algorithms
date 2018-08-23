function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // add the thing
  arr.push(num);
  console.log(arr);

  arr.sort(function(a, b) {
    return a - b;
  });

  console.log(arr);
  return arr.indexOf(num);
  // return num;


}

console.log(getIndexToIns([40, 60], 50));



var numbers = [3,10,5];
numbers.sort(function(a, b) {
  return a - b;
});
// console.log(numbers);