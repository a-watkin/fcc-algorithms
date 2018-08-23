function palindrome(str) {
  // Good luck!
  var reverseArray = (str.split('')).reverse().join('');
  
  console.log(reverseArray);
  
  return true;
}

palindrome("some silly string");