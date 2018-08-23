
function uniteUnique(arr) {
    var values = Object.values(arguments);
    var returnArray = [];

    for(var i = 0; i < values.length; i++) {
        for(var j = 0; j < values[i].length; j++) {
            if(returnArray.indexOf( values[i][j] ) == -1) {
                returnArray.push( values[i][j] );
            }
            // console.log(values[i][j]);
        }
    }
    return returnArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
