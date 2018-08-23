function myReplace(str, before, after) {
    if( before[0] == before[0].toUpperCase() ) {
        var afterArray = after.split('');
        afterArray[0] = after[0].toUpperCase();
        after = afterArray.join('');
    }

    // console.log(after);
    
    var strArray = str.split(" ");
    while (strArray.indexOf(before) > -1) {
        var index = strArray.indexOf(before);
        strArray[index] = after;
    }

    // console.log(strArray);
    return strArray.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
