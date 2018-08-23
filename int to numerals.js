function convertToRoman(num) {

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
        1: "M"
    }

    var numArray = num.toString().split('');
    console.log(numArray);

    var place = numArray.length;

    var returnArray = [];
    var zeroCount = 0;
    for(var i = 0; i < numArray.length; i++) {
        console.log(place);

        if( numArray[i] == 0 ) {
            zeroCount++;
        } else {
            zeroCount = 0;
        }

        if(place == 3 & numArray[i] != 0) {
            returnArray.push(tensPlace[numArray[i]]);
        }

        if(place == 2 & numArray[i] != 0) {
            returnArray.push(tensPlace[numArray[i]]);
        }
        if(place == 1 & numArray[i] != 0) {
            returnArray.push(onesPlace[numArray[i]]);
        }


        place--;
        console.log(zeroCount);
    }

    return returnArray;

}

console.log(convertToRoman(300));


