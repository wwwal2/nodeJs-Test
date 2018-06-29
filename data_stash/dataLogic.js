// //MAKE JSON
// var notes = {name: 'Fluffers', age: 2};
// var jsonRefactor = JSON.stringify(notes);
//
// console.log(typeof jsonRefactor);
// console.log(jsonRefactor);
//
// //CONVERT JSON TO JS
// var jsonStorage = '{"name": "al2", "age": 30}';
// var javaScriptObject1 = JSON.parse(jsonStorage);
//
// console.log(typeof javaScriptObject1);
// console.log(javaScriptObject1);

const helpFromSpaceLocal = require('fs');

var originalNoteJs = {
    title: 'empty title',
    body: 'empty body'
};

var refactorNoteString = JSON.stringify(originalNoteJs);
helpFromSpaceLocal.writeFileSync('./data_stash/data.js', refactorNoteString);

var ejectedFromFileNote = helpFromSpaceLocal.readFileSync('./data_stash/data.js');
var convertNoteJs = JSON.parse(ejectedFromFileNote);
console.log(typeof convertNoteJs);
console.log(convertNoteJs.title);