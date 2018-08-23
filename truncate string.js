function truncateString(str, num) {
//   check the str length is > than 3, if it is the end of the slice will be - 3
  
  if(str.length > 3 && num > 3) {
    var returnStr = str.slice(0, num - 3);  
  } else {
    var returnStr = str.slice(0, num);
  }
  return returnStr + "...";
}

console.log(truncateString("Absolutely Longer", 2));
