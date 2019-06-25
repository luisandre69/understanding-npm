const moment = require("moment");
const semver = require('semver')

//using moment
const day = moment().format("dddd");
console.log(day);

//using semver
const semVer = semver.gt('1.2.3', '9.8.7') 
console.log(semVer); //1.2.3 isnt a bigger version than 9.8.7
console.log(semver.valid("1.2.3")); //1.2.3 - valid version
console.log(semver.coerce("v4").raw); //4.0.0 - returns raw for v4
const range = semver.Range("^2.21.0");
console.log(range); //range  2.21.0 < 3.0.0
console.log(semver.satisfies("2.23.3",range)); //true since is the same major version even if the minor and path version change
console.log(semver.satisfies("3.0.0",range));  //false since is a diferent major version
const rangev2 = semver.Range("~2.21.0"); 
console.log(semver.satisfies("2.23.3",rangev2)); //false since rangev2 has diferent minor version
console.log(semver.satisfies("2.21.3",rangev2)); //true since rangev2 only changes patch version
console.log(semver.parse("1.2.4-aplpha.10")); //in detail of the version