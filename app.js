console.log("Starting app");

const helpFromSpace = require('fs');
const helpFromSpace2 = require('os');
const helpFromHdd = require('./notes.js');
const helpFromNPM = require('lodash');
const helpFromNPM2 = require('yargs');
const helpFronHdd2 = require('./data_stash/dataLogic.js');

//  BLOCK 1
// var something = helpFromSpace2.userInfo();
// // console.log(something);
//
// //helpFromSpace.appendFileSync('fluffers_greet.txt', 'Me - help ' + something.username + '! ');
// helpFromSpace.appendFileSync('fluffers_greet.txt', `Me - help ${something.username}! The Fluffer's greed is ${helpFromHdd.greed}! `);
//
// var theInfo = helpFromHdd.reporting();
// console.log(theInfo);
//
// console.log('The sum is ', helpFromHdd.calculator(2, 6));
//
// console.log(helpFromNPM.isString('Flufferses'));


//BLOCK 2
const parsedYargs = helpFromNPM2.argv;

console.log('Command: ', process.argv[2]);
console.log('Process: ', process.argv);
console.log('Yargs: ', parsedYargs);

var userInput = process.argv[2];

if (userInput === 'fluffers') {
    console.log('why do you write my name from a little letter?!');
} else if (parsedYargs._[0] === 'add') {
    helpFromHdd.addNote(parsedYargs.title, parsedYargs.body);
} else if (userInput === 'remove') {
    console.log('removing Note: ')
} else {
    console.log('no known command used');
};

console.log(helpFronHdd2);