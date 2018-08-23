
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (par - 1 <= strokes) {
    return "Eagle";
  } else if (par - 1 == strokes) {
    return "Bridie";
  } else  if (par == strokes) {
    return "Par";
  } else if (par + 1 == strokes) {
    return "Bogey";
  } else if (par + 2 == strokes) {
    return "Double Bogey";
  } else if (par + 3 >= strokes) {
    return "Go home!";
  }
  
  // return "Change Me";
  // Only change code above this line
}

console.log(golfScore(4, 1))
golfScore(4, 2)
golfScore(5, 2)
golfScore(4, 3)
golfScore(4, 4)
golfScore(1, 1)
golfScore(5, 5)
golfScore(4, 5)
golfScore(4, 6)
golfScore(4, 7)
golfScore(5, 9)