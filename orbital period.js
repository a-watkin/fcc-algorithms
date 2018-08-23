function orbitalPeriod(arr) {

    function getPeriod(obj) {    
        // given values
        var GM = 398600.4418;
        var earthRadius = 6367.4447;

        // var givenObj = arr[0];
        // console.log(givenObj.name);

        var altitude = obj.avgAlt;

        var altitudeFromCentre = Math.pow(altitude + earthRadius, 3);

        var time = 2 * Math.PI * Math.sqrt( altitudeFromCentre / GM );

        var orbPeriodRounded = Math.round( time );

        var rtnObj = {};

        rtnObj.name = obj.name;
        rtnObj.orbitalPeriod = orbPeriodRounded;

        // i need to return this and push to an array
        return rtnObj;
    }

    var rtnArr = [];
    // console.log(arr);
    for(var i = 0; i < arr.length; i++) {
        rtnArr.push( getPeriod( arr[i] ) );
    }

    return rtnArr;
}

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// [{name: "sputnik", orbitalPeriod: 86400}]


console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}]))

// so it gives a long ass object for the second call
// {name: "hubble", avgAlt: 556.7},
// {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss",
// orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon",
// orbitalPeriod: 2377399}].
