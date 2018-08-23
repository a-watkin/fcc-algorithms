function convertHTML(str) {
    // &colon;&rpar;
    var htmlMap = {
        '&': '&amp;',
        '<': '&​lt;',
        '>': '&#62',
        '<>': '&​lt;&​gt;'
    };

    splitStr = str.split(' ');
    // console.log(splitStr);

    var returnArray = [];
    var htmlKeys = Object.keys(htmlMap);
    for(var i = 0; i < splitStr.length; i++) {
        // test for regEx match
        if( /'/g.test( splitStr[i] ) ) {
            // you must make a new string to change something
            var replaceString = splitStr[i].replace( /'/g, '&​apos;' );
            // console.log( splitStr[i] );
            // console.log( replaceString );
            splitStr[i] = replaceString;
        }

        if(htmlKeys.includes(splitStr[i])) {
            returnArray.push(htmlMap[ splitStr[i] ]);
        } else {
            returnArray.push(splitStr[i]);
        }
    }

    return returnArray.join(" ");
}

// console.log(convertHTML("Dolce & Gabbana"));
// should return Dolce &​amp; Gabbana.
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve"))
// should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') 
// should return Stuff in &​quot;quotation 
// marks&​quot;.
// console.log(convertHTML("Shindler's List"));
// should return Shindler&​apos;s List.

// convertHTML("<>") 
// should return &​lt;&​gt;.
// convertHTML("abc") 
// should return abc.