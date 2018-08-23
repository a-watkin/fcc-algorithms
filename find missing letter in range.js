function fearNotLetter(str) {
    // get the charCodeAt then if the next charCodeAt does not equal the
    // previous plus one then there is a gap and return previous plus one

    // start at minus one so you can safely go backwards one
    for(var i = 1; i < str.length; i++ ) {
        // value at index minus one plus one should equal the current value
        // if not there's something missing
        if( str[i - 1].charCodeAt() + 1 != str[i].charCodeAt() ) {
            return String.fromCharCode( str[i].charCodeAt() -1 );
        }
    }
    // else return undefined so just return nothing
    return;
}

console.log(fearNotLetter("abce"));