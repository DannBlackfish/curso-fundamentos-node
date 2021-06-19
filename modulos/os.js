const os = require('os');

//para saber la arquitectura:
//console.log(os.arch());

//para saber la plataforma:
//Para ejecutar comando por ejemplo para saber el sistema operativo en el que estas correindo
//console.log(os.platform());

//información de las cpus dentro de nuestro sistema
//console.log(os.cpus().length)

//errores del sistema
//console.log(os.constants);

//memoria:
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

//directorio raiz del usuario
console.log(os.homedir());
//archivo temporal
console.log(os.tmpdir());

//cual es el hostname
console.log(os.hostname());

//interfaces de red
console.log(os.networkInterfaces());
