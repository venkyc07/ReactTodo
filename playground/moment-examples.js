var moment = require('moment');

console.log(moment().format())

var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1474641418;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment',currentMoment.format("MMM DD YYYY @ h:ss a"));

console.log(moment().format("MMMM Do, YYYY @ h:ss A"));
