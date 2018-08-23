function splitUnits(num) {
    var onesPlace = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX"
    }
    var tensPlace = {
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC"
    };

    var hundredsPlace = {
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM"
    }

    var thousdandsPlace = {
        1: "M",
        2: "MM",
        3: "MMM",
        4: "MMMM",
        5: "MMMMM",
        6: "MMMMMM",
        7: "MMMMMMM",
        8: "MMMMMMMM",
        9: "MMMMMMMMM",
    }

    // for storing digits and their place
    var numbers = {};

    // split the numbers into an array
    var numArray = num.toString().split('');

    // getting values into the numbers associative array
    for(var i = 0; i < numArray.length; i++) {
        // minus 1 because index starts at 0
        var reverseIndex = numArray.length - 1 - i;
        // where the value should go in the associative array
        var place = i + 1;
        // so this gives the left to right of the array and the base of the value
        // console.log(i + 1, numArray[reverseIndex]);
        // then you add it to the numbers dict
        numbers[place] = numArray[reverseIndex];
    }

    var returnArray = [];
    var lenNumbers = Object.keys(numbers).length;
    // console.log(lenNumbers);
    // then you do the lookups
    for(var i = 1; i < lenNumbers + 1; i++) {
        console.log(i, numbers[i]);
        if(i == 1 & numbers[i] != 0) {
            console.log( onesPlace[numbers[i]] )
            returnArray.unshift(onesPlace[numbers[i]]);
        }
        if(i == 2 & numbers[i] != 0) {
            console.log( onesPlace[numbers[i]] )
            returnArray.unshift(tensPlace[numbers[i]]);
        }
        if(i == 3 & numbers[i] != 0) {
            console.log( onesPlace[numbers[i]] )
            returnArray.unshift(hundredsPlace[numbers[i]]);
        }
        if(i == 4 & numbers[i] != 0) {
            console.log( onesPlace[numbers[i]] )
            returnArray.unshift(thousdandsPlace[numbers[i]]);
        }  
    }

    // then you build the new array and join it, return it
    return returnArray.join('');
}
console.log(splitUnits(4928));
