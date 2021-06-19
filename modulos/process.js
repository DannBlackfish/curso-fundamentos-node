//const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

//se ha desconectado del event loop el exit 
process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca')
    }, 0);
})

setTimeout(() => {
    console.log('Esto si se va a ver')
}, 0);

//excepcion que nadie a capturado
//evitarlo
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    }, 0)
    console.error(err);
})

funcionQueNoexiste();

console.log('Esto si el error no se recoge, no sale')
//promesas que se han rechazado y no tiene catch 
//process.on('uncaughtRejection')
