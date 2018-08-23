function steamrollArray(arr) {
    var rtnArr = [];

    function containsArray(array) {
        for(var i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])) {
                return true;
            }
        }
        return false;
    }

    while(containsArray(arr)) {
        for(var i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                var temp = arr.shift();
                for(var j = 0; j < temp.length; j++) {
                    // console.log(arr[i]);
                    if(Array.isArray(temp[j])) {
                        arr.push( temp[j].pop() )
                        // console.log('eh',temp[j]);
                    } else {
                        // console.log('hmm', temp[j])
                        rtnArr.push( temp[j] );
                    }
                } 
            } else {
                console.log('else',arr[i]);
                if( rtnArr.includes(arr[i]) ) {
                    // console.log("why?");
                    continue;
                } else {
                    rtnArr.push(arr[i]);
                }
            }
        }
    }

    // console.log(arr);
    return rtnArr;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

console.log(steamrollArray([1, {}, [3, [[4]]]]));
// should return [1, {}, 3, 4]