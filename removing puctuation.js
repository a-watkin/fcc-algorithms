function palindrome(str) {
    var lowerStr = str.toLowerCase();
    // sort of cheated with this
    var exclude = [" ", ",", ".", "_", "-", "/", ":", "(", ")"];
    var cleanArray = [];

    // console.log(lowerStr);
    for (var i = 0; i < lowerStr.length; i++) {
        if( !exclude.includes(lowerStr[i]) ) {
            cleanArray.push(lowerStr[i]);
        }
    };
    console.log(cleanArray.join(''));
    // console.log(cleanArray.length / 2)

    var end = cleanArray.length - 1;

    // if it's even then the two pointers never meet
    for(var i = 0; i < cleanArray.length; i++) {
        // console.log(i + ' ' + end)
        console.log(cleanArray[i] + ' ' + cleanArray[end]);
        if(i == end) {
            // console.log(i + ' ' + end);
          return true;
    } else {
      
      if(cleanArray[i] == cleanArray[end]) {
            end--;
          } else {
            return false;
          }
        }
    }
    return true;

}

// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("never odd or even") );
// console.log(palindrome("neen") );
// console.log(palindrome("My age is 0, 0 si ega ym.") );

console.log(palindrome("0_0 (: /-\ :) 0-0") );
