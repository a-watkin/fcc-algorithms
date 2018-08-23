function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function checkBool(value) {
    // so it's returning the value if it doesn't equal false
    var x = Boolean(false);
    console.log(value != x);
    return value != x;
  }
  
  var filtered = arr.filter(checkBool);
  return filtered;
  
}

// console.log(bouncer([7, "ate", "", false, 9]));

// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// console.log(NaN == false);


function checkBool(value) {
    return Boolean(value);
}

// testArray = [false, null, 0, NaN, undefined, ""];

testArray = ["a", "b", "c"];
for(var i = 0; i < testArray.length; i++) {
    console.log(checkBool(testArray[i]));
}

// console.log(Boolean("a"))