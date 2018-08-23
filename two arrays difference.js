function diffArray(arr1, arr2) {
    var newArr = [];

    for(var i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) == false) {
            newArr.push(arr1[i]);
        }
    }

    for(var i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i]) == false) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]. 
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));