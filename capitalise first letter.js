var aWord = "test";

var rest = aWord.slice(1, aWord.length);
var temp = aWord[0].toUpperCase();

console.log(aWord + ' ' + temp + rest);

function titleCase(str) {
//   split into word
  var words = str.split(" ");
//   iterate over the words
  for(var i = 0; i < words.length; i++) {
    var lowerCase = words[i].toLowerCase();
    
    if(lowerCase.length > 1) {
      var firstLetter = lowerCase[0].toUpperCase();
      var rest = lowerCase.slice(1, lowerCase.length);
      words[i] = firstLetter + rest;
    } else {
        var firstLetter = lowerCase[0].toUpperCase();
        words[i] = firstLetter;
    }
  }
//   put the words to lower case
  var wordSentence = words.join(" ");
  
//   make word[0] uppercase
  return wordSentence;
}

// titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));