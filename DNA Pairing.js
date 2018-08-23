function pairElement(str) {
    returnArray = [];

    for(var i = 0; i < str.length; i++) {
        pushArray = [];
        // if the array contains a G then add a C and vise versa
        if( str[i] == 'G' | str[i] == 'C' ) {
            if( str[i] == 'G' ) {
                pushArray.push(str[i]);
                pushArray.push( 'C' );
            } else {
                pushArray.push(str[i]);
                pushArray.push( 'G' );    
            }
        }
        // if the array contains a T then add an A and vise versa
        if( str[i] == 'T' | str[i] == 'A' ) {
            if( str[i] == 'T') {
                pushArray.push(str[i]);
                pushArray.push( 'A' );
            } else {
                pushArray.push(str[i]);
                pushArray.push( 'T' );         
            }
        }
        // push the array to the return array
        returnArray.push(pushArray);
    }
    // console.log(returnArray)
    return returnArray;
}

// pairElement("GCG");
// return [["G", "C"], ["C","G"],["G", "C"]]

// pairElement("ATCGA")
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// pairElement("TTGAG") 
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

console.log(pairElement("CTCTA")) 
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].