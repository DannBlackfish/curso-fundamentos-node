const { exec, spawn } = require('child_process');

/* exec('ls -la', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
}) */

//por ejemplo ejecutar la clase de consola
//Hace que un proceso hijo ejecute una clase de node de un proceso anterior
//hace procesos por debajo
/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
})
 */
 
//spawn nos deja invocar un proceso nuevo de node JS

let proceso = spawn('ls', ['-la'])

//pid es el proceso id del proceso
console.log(proceso.pid);
//proceso conectado
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    //si el proceso esta muerto
    console.log(process.killed)
    console.log(dato.toString)
})

//se detcta cuando acaba el proceso
proceso.on('exit', function () {
    console.log('el proceso terminó');
    console.log(proceso.killed)
});

