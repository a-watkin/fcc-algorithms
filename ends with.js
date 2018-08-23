function confirmEnding(str, target) {
  var wordList = str.split(" ");
  var lastWord = wordList[wordList.length - 1];

  if(wordList.length == 1) {

    if(str.substring((str.length - 1), str.length) == target) {
      return true;
    }
  
  } else {
    // console.log(lastWord);
    if(lastWord.length >= target.length) {
      var subWordStart = lastWord.length - target.length;
      // console.log();
      if(lastWord.substr(subWordStart, lastWord.length) == target) {
        return true
      }
    }
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "same"));