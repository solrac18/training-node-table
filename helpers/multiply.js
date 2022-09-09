const fs = require('fs');

const createMultiplyTableFile = ( args ) => {

    const base = args.base;
    const list = args.list;

    return new Promise ( (resolve, reject) => {
        if ( list ){
            console.log('====================');
            console.log('     TABLA DEL ', base);
            console.log('====================');
        }        

        let data = '';
        let fileName = `./tables/tabla-${base}.txt`;

        for (j=1; j<11; j++){
            data += (`${ base } x ${j} = ${ base * j }\n`);
        }

        fs.writeFile(fileName, data, (err) => {
            ( err ) 
                ? reject('err')
                : resolve(fileName);       
        });
    });
}

module.exports = {
    createMultiplyTableFile
}