function telephoneCheck(str) {
  // Good luck!

  if(str.match(/[1]?( )?(.)?[1-5][1-5][1-6](\))?(.)?[0-7][0-8][0-9](.)?[0-9][0-9][0-9][0-9]/g)) {
    // console.log('yes?');

    if( str.includes('(')) {
        if( !str.includes(')') ) {
            return false;
        }
    }

    if( str.includes(')')) {
        if( !str.includes('(') ) {
            return false;
        }
    }

    return true;
  } else {
    return false;
    // console.log("no");
  }

  // return false;
}


console.log(telephoneCheck("1 757 622-7382"))
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");

telephoneCheck("555-555-5555");
// should return false;

telephoneCheck("1 555 555 5555");