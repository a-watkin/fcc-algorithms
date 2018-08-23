function destroyer(arr) {
  // Remove all the values
//   var removeValues = [];
//   for(var i = 0; i)
  var arrayValues = arguments[0];
  var targets = [].slice.call(arguments, 1);
  
  function removeValues(value) {
    // console.log(!arrayValues.includes(value));
    return !targets.includes(value);
  }

  console.log(arrayValues.filter(removeValues));
  
  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);