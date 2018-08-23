function destroyer(...arguments) {
    return arguments;
  // Remove all the values
  // var removeValues = [];
  // for(var i = 0; i)
  // var args = Array.from(arr);
  // var args = Array.prototype.slice.call(arguments);
  // console.log(args);
  // console.log(typeof arguments);
}

// destroyer([1, 2, 3, 1, 2, 3, 9], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3, 9], 2, 3));

// function foo(...args) {
//   return args;
// }
// console.log(foo([1,2,3], 2, 3)); // [1,2,3]


function foo() {
    var arr = arguments[0];
    var args = [].slice.call(arguments, 1);
    console.log(arr);
    console.log(args);

  // for (var i = 0; i < arguments.length; i++) {
  //   if(arguments[i] == Array) {

  //   }

  // }
}
foo([1, 2, 3, 1, 2, 3, 9], 2, 3);

