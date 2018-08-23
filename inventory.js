function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    
    // to object so i can look up number of items after sorting
    // named values
    function toObject(arr) {
        var Obj = {};

        for(var i = 0; i < arr.length; i++) {
            // console.log(arr2[i])
            Obj[arr[i][1]] = arr[i][0];
        }
        return Obj;
    }
    // object for lookup
    var arr2Obj = toObject(arr2);

    // makes a new sorted inventory array
    function sortValues(arr2, Obj) {
        // get all the named values and sort them
        var namedValues = [];

        for(var i = 0; i < arr2.length; i++) {
            namedValues.push(arr2[i][1]);
        }

        var sortedNamedValues = namedValues.sort();
        // console.log(sortedNamedValues)

        var rtnArray = [];
        // then look up those values and get the numbers associated with them
        for(var i = 0; i < namedValues.length; i++) {
            // console.log(namedValues[i], Obj[namedValues[i]])
            rtnArray.push( [Obj[namedValues[i]], namedValues[i]] );
            // if( arr2[i][1] == );
        }
        return rtnArray;
    }
    // sorted new inventory
    var newInv = sortValues(arr2, arr2Obj);

    // helper function to find values
    function findValue(value) {
        for(var i = 0; i < arr1.length; i++) {
            if( arr1[i][1] == value ) {
                return i;
            }
        }
    }

    // now iterate over the items in inventory add any that are not in 
    // already there, if they are there then increment them

    // console.log(findValue("Hair Pin"))
    for(var i = 0; i < newInv.length; i++) {
        if( findValue( arr2[i][1] ) != undefined )  {
            var index = findValue( arr2[i][1] );
            // console.log('already there update number')
            arr1[index][0] = arr1[index][0] += arr2[i][0];
        } else {
            // this isn't going to work, because there will be a value you push
            // that is then out of order
            // console.log('update')
            arr1.push( [ arr2[i][0], arr2[i][1] ] );
        }
    }
    // // console.log(findValue("Half-Eaten Apple"))

    

    // arr1 to object
    var arr1Obj = toObject(arr1);
    var sortedArr1 = sortValues(arr1, arr1Obj);

    // console.log(sortedArr1);
    return sortedArr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));