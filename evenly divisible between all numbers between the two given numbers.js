function smallestCommons(arr) {
  // smallest common multiple of both 1 and 3 that is evenly divisible by all
  // numbers between the two numbers given.
  var lower;
  var higher;

  if( arr[0] > arr[1] ) {
    higher = arr[0];
    lower = arr[1];
  } else {
    higher = arr[1];
    lower = arr[0];
  }
  // console.log(higher, lower);
  // i need a range of numbers between the lowest and highest
  var numberRange = [];

  for(var i = lower; i < higher + 1; i++) {
    numberRange.push(i);
  }  

  // console.log(numberRange);
  // i then need to divide a number between all of those to check
  // if it divides evenly, if it doesn't then increment the number
  // if it does then return it

  // starting at higher, divide higher by all elements in numberRange
  // if any of those results in a remainder then increment higher and try again
  var found = false;
  var increment = higher;

  while( !found ) {
    var allGood = true;
    for(var i = 0; i < numberRange.length; i++) {
      if( increment % numberRange[i] != 0) {
        // console.log( increment % numberRange[i] != 0 );
        allGood = false;
        break;
      }
    }
    
    if( !allGood ) {
      // console.log(increment, "increase");
      increment++;
    } else {
      found = true;
    }
  }

  return increment;
}

console.log(smallestCommons([1,13]));
// smallestCommons([5,1]);