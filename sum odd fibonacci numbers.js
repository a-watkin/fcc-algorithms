function sumFibs(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }

    var seed = [0,1];
    var oddFib = [1];

    for (var i = 2; i < num + 1; i++) {
        seed.push( seed[i - 1] + seed[i - 2] );
        // console.log( seed[i - 1] + seed[i - 2] );
        if ( ( seed[i - 1] + seed[i - 2] ) % 2 != 0 ) {
            oddFib.push( seed[i - 1] + seed[i - 2] );
        }
    }
    var sumCount = 0;
    for (var j = 0; j < oddFib.length; j++) {
        if( oddFib[j] >= num ) {
            break;
        }
        // console.log( oddFib[j] );
        sumCount += oddFib[j];
        // console.log( sumCount );
    }
    console.log( seed );
    return sumCount;
}

console.log(sumFibs(40));
