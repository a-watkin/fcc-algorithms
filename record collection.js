// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // id there the array tracks does not exists create it
  // otherwise add to it
  if( prop == 'tracks') {
    if( value == "" ) {
      // so dot notation with something like this fails for some reason?
      delete collectionCopy[id][prop];
      // console.log(collectionCopy[id][prop])
    }

      // console.log('getting here?')
    else if( collectionCopy[id].tracks ) {
      collectionCopy[id].tracks.push(value);
    } else {
      collectionCopy[id].tracks = [];
      collectionCopy[id].tracks.push(value);
    }
  } else {
    // if the prop doesn't exist create it
    // if the value is "" then remove the prop
    if( value == "" ) {
      delete collectionCopy[id][prop];
    } else {
      collectionCopy[id][prop] = value;
    }
  }
  // return the entire collection object.
  return collectionCopy;
}

// Alter values below to test your code
console.log(updateRecords(2468, "tracks", ""));
// updateRecords(2468, "tracks", "")