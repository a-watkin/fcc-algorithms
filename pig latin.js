// The 21 consonant letters in the English alphabet are: B, C, D, F, G, H, J,
// K, L, M, N, P, Q, R, S, T, V, X, Z,

// These letters are vowels in English: A, E, I, O, U, and sometimes Y. The
// letter Y can be a vowel (as in the words "cry", "sky", "fly" , “my” or "why"),
// or it can be a consonant (as in "yellow", "yacht", "yam" or "yesterday").
function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u", "y"];

    var consonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl",  
                            "fr", "gl", "gr", "pl", "pr",  "sc",
                            "sh",  "sk", "sl", "sm", "sn", "sp", "st", 
                            "sw", "th", "tr", "tw",  "wh",  "wr",
                            "sch", "scr", "shr", "sph", "spl",     
                            "spr", "squ", "str", "thr"];

    // if the first letter is a vowel add way to the end

    // if starts with vowel
    if( vowels.includes( str[0] ) ) {
        // var strArray = str.split('');
        str = str + "way";
        // console.log("vowel ", str);
    } else {
        // check for consonant groups, check first 2 and first 3 chars
        if( consonantClusters.includes( str.substring(0, 2) ) ) {
            
            var strArray = str.split('');
            var firstChar = strArray.shift();
            strArray.push(firstChar)
            var firstChar = strArray.shift();
            strArray.push(firstChar)

            strArray.push("ay");
            // console.log("consonant", strArray);
            str = strArray.join('');
        }
        
        else if( consonantClusters.includes( str.substring(0, 3) ) ) {

            var strArray = str.split('');
            var firstChar = strArray.shift();
            strArray.push(firstChar)
            var firstChar = strArray.shift();
            strArray.push(firstChar)
            var firstChar = strArray.shift();
            strArray.push(firstChar)
            
            strArray.push("ay")
            // console.log("consonant", strArray);
            str = strArray.join('');
        } else {
            // starts with consonant
            // if the first letter is consonant then move if to the end and add "ay"
            var strArray = str.split('');
            var firstChar = strArray.shift();

            strArray.push(firstChar);
            strArray.push("ay");
            // console.log("consonant", strArray);
            str = strArray.join('');
        }
    }

    console.log(str);
    return str;
}

translatePigLatin("consonant");

translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway". 