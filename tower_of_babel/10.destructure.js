/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */

var json = {
    "name": {
        "first": "Yosuke",
        "family": process.argv[2]
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};
var {name: {family: familyName}, birth: {day: birthDay}} = json;
console.log(familyName);
console.log(birthDay);

//my solution is below
/*
var json = {
    "name": {
        "first": "Yosuke",
        "family": process.argv[2]
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};

// Your code here.
var {name, birth} = json;
var {first,family} = name;
var {year,month,day} = birth
console.log(family);
console.log(day);
*/
