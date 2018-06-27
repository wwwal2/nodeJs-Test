console.log('notes.js has been atatched ');

//console.log(module);

module.exports.greed = "infinite";


// module.exports.reporting = function () {};
module.exports.reporting = () => {
    console.log('the report from Fluffers is on your desk! ');
    return 'REPORT My full name is Fluffers Mc Flufferson Esquire Jr. the Third! ';
}

module.exports.calculator = (a, b) => {
    return a + b;
}