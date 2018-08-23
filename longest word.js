function findLongestWord(str) {
//   split the sentence into word
  var splitWords = str.split(" ");
  
//   loop over the words
//   get the length of each word and keep track of the largest seen so far
  
  // if you're doing this you must initialise a value,
  // apparently undefined is always less than something else
  var largestSeen = 0;
  
  for(var i = 0; i < splitWords.length; i++) {
    // console.log(splitWords[i].length);
    if( splitWords[i].length > largestSeen ) {
        console.log('test');
      largestSeen = splitWords[i].length;
    }
  }
  
  
//   return the longest at the end
  
  return largestSeen;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));