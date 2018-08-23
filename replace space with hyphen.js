function spinalCase(str) {
    var splitStr = str.split(/(?=[A-Z])/);

    if(str.match(/(?=[A-Z])/)) {
        var temp = str.split(/(?=[A-Z])/);
        str = temp.join("-");
    }

    if(str.match(/ /g)) {
        str = str.replace(/ /g, "-");
    }

    if(str.match(/--/g)) {
        str = str.replace(/--/g, "-");
    }

    if(str.match(/_/g)) {
        str = str.replace(/_/g, "");
    }

    return str.toLowerCase();
}
console.log(spinalCase("this Is Spinal Tap"))
// should return "this-is-spinal-tap".

// console.log(spinalCase("The_Andy_Griffith_Show") )
// should return "the-andy-griffith-show".

// console.log(spinalCase("Teletubbies say Eh-oh"))
// should return "teletubbies-say-eh-oh".

// console.log(spinalCase("AllThe-small Things") )
// should return "all-the-small-things".