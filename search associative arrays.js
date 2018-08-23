function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // console.log(targetValue.toString());
  // Only change code below this line

  var targetKey = Object.keys(source);
  var targetValue = Object.values(source);

  // iterate over the collection
  for(var i = 0; i < collection.length; i++) {
    // for each of the associative arrays check for the source key within them
    var addArray = true;
    for(var j = 0; j < targetKey.length; j++) {
        // check the current collection has the current key value
        // console.log( collection[i].hasOwnProperty(targetKey[j]) );

        // all seems ok, now check that those keys have values that are the same as the targetValues
        // console.log( collection[i][targetKey[j]] == targetValue[j] );
        if( collection[i].hasOwnProperty(targetKey[j]) ) {
            if( collection[i][targetKey[j]] == targetValue[j] ) {
                continue;
            } else {
                addArray = false;
                break;
            }
        } else {
            addArray = false;
            break;
        }
    }
    if(addArray) {
        arr.push(collection[i]);
    }
  }
  
  return arr;
}
whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }],

    { last: "Capulet" });

// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
 // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].

// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
// should return [{ "a": 1, "b": 2, "c": 2 }]. 