function sumAll(arr) {
    // console.log();
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);

    
    var accumulator = 0;
    for(var i = min; i < max + 1; i++) {
        accumulator += i;
    }
    // console.log(accumulator);
    return accumulator;
}

console.log(sumAll([1, 4]));