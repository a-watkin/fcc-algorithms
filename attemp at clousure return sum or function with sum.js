function addTogether() {

    var x = arguments[0];

    if( typeof( arguments[0] ) != "number") {
        return undefined;
    }

    if(arguments.length == 2) {
        if( typeof( arguments[1] ) != "number") {
            return undefined;
        } 
        return arguments[0] + arguments[1];
    }

    function sum(y) {
        if( typeof( y ) != "number") {
            return undefined;
        }
        return x + y;
    }

    return sum;
  
}

console.log(addTogether(2,3));

console.log(addTogether(2)(9));

console.log(addTogether("http://bit.ly/IqT6zt"));

console.log(addTogether(2, "3"))
// should return undefined.
console.log(addTogether(2)([3]))
// should return undefined. 