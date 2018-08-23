function truthCheck(collection, pre) {
    // Is everyone being true?

    for(var i = 0; i < collection.length; i++) {
        var subCollection = collection[i]
        // console.log(subCollection)
        if(subCollection[pre]) {
            // console.log(subCollection[pre])
            continue;

        } else {
            return false;
        }
    }
    return true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") 
// should return true
// console.log(truthCheck([{"single": "yes"}], "single") )
// should return true


// console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
// should return false
// console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
// should return false
// console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
// should return false 