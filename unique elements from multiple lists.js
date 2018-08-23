function uniteUnique(arr) {
    // add all elements of the lists in arguments to a new array
    var values = Object.values(arguments);
    var flatArray = [];
    var returnArray = [];

    for(var i = 0; i < values.length; i++) {
        for(var j = 0; j < values[i].length; j++) {
            flatArray.push(values[i][j]);
        }
    }
    // count the number of times a value appears
    var counterObj = {};

    for(var i = 0; i < flatArray.length; i++) {
        // if value does not exist in keys then add it
        if( !counterObj[ flatArray[i] ] ) {
            counterObj[flatArray[i]] = 1;
            // console.log(counterObj);
        } else {
            // console.log(flatArray[i]);
            counterObj[ flatArray[i] ]++;
        }
    }

    for(var i = 0; i < flatArray.length; i++) {
        // if the value in counterObj appears only once add it to the
        // returnArray
        if( counterObj[ flatArray[i] ] == 1 ) {
            returnArray.push(flatArray[i]);
        }
    }

    return returnArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));