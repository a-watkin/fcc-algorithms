var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
    i = 0;
    while(i < contacts.length) {
        // console.log(contacts[i].firstName);
        if (contacts[i].firstName == firstName) {
            // console.log(contacts[i][prop]);
            if (contacts[i][prop]) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
        i++;
    }
    return "No such name";
}

// Change these values to test your function
// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Akira", "cats"));
console.log(lookUpProfile("Harry", "likes"));
// lookUpProfile("Harry", "likes")