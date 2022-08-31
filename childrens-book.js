const brain = require('brain.js');

const trainingData = [
    'Jane saw Doug.',
    'Doug saw Jane.',
    'Spot saw Doug and Jane looking at each other.',
    'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
    iterations: 1500,
    log: (details) => console.log(details),
    errorThresh: 0.011,
});
console.log('Training result: ', result);

const run1 = lstm.run('Jane');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');
const run5 = lstm.run("saw");
const run6 = lstm.run("seat");
const run7 = lstm.run("it");
const run8 = lstm.run("abc");

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: It' + run4);
console.log('run 5: saw' + run5);
console.log('run 6: seat' + run6);
console.log('run 7: it' + run7);
console.log('run 8: abc' + run8);