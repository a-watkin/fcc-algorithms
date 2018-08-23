function palindrome(str) {
    var lowerStr = str.toLowerCase();
    var exclude = [" ", ",", ".", "-", "_"];
    var cleanArray = [];

    console.log(exclude);

    for (var i = 0; i < lowerStr.length; i++) {
        if( !exclude.includes(lowerStr[i]) ) {
            cleanArray.push(lowerStr[i]);
        }
    };
    console.log(cleanArray);
    return cleanArray.join(" ");
}

console.log(palindrome("A man, a - _ plan, a canal. Panama"));