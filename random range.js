function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// console.log(Math.round(getRandomArbitrary(0, 100000)));

var url = "https://en.wikipedia.org/?curid=" + Math.round(getRandomArbitrary(100000, 999999));

console.log(url);


// "https://en.wikipedia.org/?curid=23251407"