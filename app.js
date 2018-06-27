console.log("Fluffers");

const helpFromSpace = require('fs');
const helpFromSpace2 = require('os');
const helpFromHdd = require('./notes.js');
const helpFromNPM = require('lodash');


var something = helpFromSpace2.userInfo();
// console.log(something);

//helpFromSpace.appendFileSync('fluffers_greet.txt', 'Me - help ' + something.username + '! ');
helpFromSpace.appendFileSync('fluffers_greet.txt', `Me - help ${something.username}! The Fluffer's greed is ${helpFromHdd.greed}! `);

var theInfo = helpFromHdd.reporting();
console.log(theInfo);

console.log('The sum is ', helpFromHdd.calculator(2, 6));

console.log(helpFromNPM.isString('Flufferses'));
