function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
//   str.substring(indexStart[, indexEnd])
  
  if(str.substring(str.length - 1, str.lengh) == target ) {
    return str.substring(str.length - 1, str.lengh);
  }
  return str;
}

confirmEnding("Bastian", "n");