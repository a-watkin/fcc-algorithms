function factorialize(num) {
  var total = num;
  while(num > 1) {
    num--;
    console.log(num);
    total = total * num;
    console.log(total);
  }
  return total;
}

console.log(factorialize(5));