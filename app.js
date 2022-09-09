
const { listenerCount } = require('process');
const { number, boolean } = require('yargs');
const { createMultiplyTableFile } = require('./helpers/multiply');
const args = require('./config/yargs');

console.clear();

createMultiplyTableFile(args)
    .then( fileName => console.log(`File ${ fileName } created`))
    .catch( err => console.log( err ));






