
function mutation(arr) {
//   for each char in the first string check its position in the second if it
//   exists then you should get a positive number i am assuming that there
//   will only be two words, which probably isn't the case
  
//   get the first element of the array
//   break that first element into an array of chars, do you need to do this? i think so
  var firstWord = arr[0].toLowerCase().split('');
  var secondWord = arr[1].toLowerCase().split('');

  console.log(firstWord + ' ' + secondWord);
  
//   so if it's true one way it's also has to be true the other way so just
//   check that the chars in the shorter word are all in // the longer word
  if( firstWord.length > secondWord.length ) {
    for(var i = 0; i < secondWord.length; i++) {
//       console.log(arr[1].toLowerCase().indexOf(secondWord[i]));
      if( firstWord.indexOf(secondWord[i]) == -1 ) {
        return false;
      }
    }
  } else {
      for(var i = 0; i < firstWord.length; i++) {
      // console.log(arr[1].toLowerCase().indexOf(secondWord[i]));
      console.log(firstWord[i], secondWord.indexOf(firstWord[i]));
      // console.log(secondWord.indexOf(firstWord[i]) == -1);
      if( secondWord.indexOf(firstWord[i]) == -1 ) {
        return false;
      }
    }
  }
  
  return true;
  
}

console.log(mutation(["hello", "hey"]));
