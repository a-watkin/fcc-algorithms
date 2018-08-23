function binaryAgent(str) {
    var splitStr = str.split(" ");
    // console.log( splitStr )
    var temp = [];

    for(var i = 0; i < splitStr.length; i++) {
        var wordTemp = String.fromCharCode( parseInt(splitStr[i], 2) );
        temp.push(wordTemp);
    }
    return temp.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// console.log(parseInt("01101110", 2))
// console.log(
//     String.fromCharCode( 
//         String.fromCharCode( 
//             parseInt("01110010", 2) 
//         )
//     )
// )