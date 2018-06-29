console.log('notes.js has been atatched ');
const helpFromSpaceLocal = require('fs');
const helpFromNPM2Local = require('yargs');



// //BLOCK 1
//console.log(module);
//
// module.exports.greed = "infinite";
//
//
// // module.exports.reporting = function () {};
// module.exports.reporting = () => {
//     console.log('the report from Fluffers is on your desk! ');
//     return 'REPORT My full name is Fluffers Mc Flufferson Esquire Jr. the Third! ';
// };
//
// module.exports.calculator = (a, b) => {
//     return a + b;
// };

// REFACTORING THE CODE
var greed = "infinite";

var reporting = () => {
    console.log('the report from Fluffers is on your desk! ');
    return 'REPORT My full name is Fluffers Mc Flufferson Esquire Jr. the Third! ';
};

var calculator = (a, b) => {
    return a + b;
};
// END OF REFACTORING


//BLOCK 2
const parsedYargsLocal = helpFromNPM2Local.argv;
var addNote = (title, body) => {
    console.log ("adding Note: ", title, body);
    helpFromSpaceLocal.appendFileSync('commands.txt', parsedYargsLocal._[0] + ' ' + parsedYargsLocal.title + ' ' + parsedYargsLocal.body + ' ');
};





module.exports = {
    // //OLD VERSION
    // greed : greed,
    // reporting : reporting,
    // calculator : calculator,
    // addNote : addNote,

    greed,
    reporting,
    calculator,
    addNote,
};