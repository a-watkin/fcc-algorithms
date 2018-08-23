var Person = function(firstAndLast) {
    // constructor area
    var values = Object.values(firstAndLast).join('').split(' ');
    var valuesLength = values.length;
    // console.log(values)
    
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return values[0] + ' ' + values[1];
    };
  
    this.getFirstName = function() {
      return values[0];
    };
  
    this.getLastName = function() {
      return values[ valuesLength - 1 ];
    };
  
    this.setFirstName = function(first) {
      values[0] = first;
    };

    this.setLastName = function(lastName) {
      values[ valuesLength - 1 ] = lastName;
    };

    this.setFullName = function(firstAndLast) {
      values = Object.values(firstAndLast).join('').split(' ');
    };
};

var bob = new Person('Bob Ross');
// console.log(bob.getFirstName());
// console.log(bob.getFullName());
// console.log(bob.getLastName());

// console.log(bob.setFirstName("Carl"));
// console.log(bob.setLastName("Blah"));
console.log(bob.setFullName("Blah Face"));
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());