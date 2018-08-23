// console.log("!".charCodeAt(0));
// 90
// console.log( "Z".charCodeAt(0) + 13 ); 

// range of uppercase chars is 65-90

// space char is 32
// console.log(" ".charCodeAt(0) == 32);
// console.log(" " )
// 110

var forbiddenChars = ["!", ".", " ", "?"];

// you have to loop back
function rot13(str) { 
    // LBH QVQ VG!
    var words = str.split(' ');
    // console.log(words);
    var returnArray = [];
    var forbiddenChars = ["!", ".", " ", "?"];

    for(var i = 0; i < words.length; i++) {
        // console.log(words[i]);
        var wordChars = words[i];
        var shiftedChars = [];

        for(var j = 0; j < wordChars.length; j++) {
            if( forbiddenChars.includes( wordChars[j] ) ) {
                shiftedChars.push(wordChars[j]);
            }

            // console.log(wordChars[j])
            else if( (wordChars[j].charCodeAt(0) + 13) > 90 ) {
                // console.log('anything?');
                shiftedChars.push( String.fromCharCode( wordChars[j].charCodeAt(0) - 13 ) );
            } else {
                shiftedChars.push( String.fromCharCode( wordChars[j].charCodeAt(0) + 13 ) );
            }
        }
        shiftedChars = shiftedChars.join('');
        returnArray.push(shiftedChars.toString());
        // console.log(returnArray);
        // returnArray.push(shiftedChars.join(''));
    }
    return returnArray.join(' ');
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK!"));
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX!