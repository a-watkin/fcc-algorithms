function pairwise(arr, arg) {
    if( arr.length <= 0 ) {
        return 0;
    }
    // to store already used indexes
    var excluded = [];
    var searchIndex = 0;
    for(var i = 0; i < arr.length; i++) {
        var other = arg - arr[i];
        var indexOther = arr.indexOf( other, searchIndex );

        // negative one means that it's not in there right?
        if( indexOther > -1 
            && excluded.indexOf( indexOther ) == -1 
            && excluded.indexOf( i ) == -1
            // it was pushing the same value twice, as in the exact same index
            && i != indexOther  ) {
            excluded.push(i);
            excluded.push(indexOther);
            // increments the start index for indexOf
            searchIndex++;
        }
    }

    var total = excluded.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;   
    });
    return total;
}


// pairwise([7, 9, 11, 13, 15], 20)
// should return 6

// everything working ok below

// pairwise([1,4,2,3,0,5], 7);
// should return 11


// pairwise([1, 3, 2, 4], 4) 
// should return 1.

// pairwise([1, 1, 1], 2)
// should return 1.

// console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
// should return 10. 

// console.log(pairwise([], 100)) 
// should return 0.