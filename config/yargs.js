
const argv = require('yargs')
.option('b', {
    alias : 'base',
    type : 'number',
    demandOption : true,
    description : 'The base for multiply table'
})
.check( (argv, options) => {
    if ( isNaN( argv.base ) ){
        throw 'Base has to be a number';
    }

    return true;
})
.option('l', {
    alias : 'list',
    typer : 'boolean',
    demandOption : false,
    description : 'Show result table in command line',
    default : false
})
.argv;

module.exports = argv;