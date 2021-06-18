console.log('Hola mundo');

//Cada segundo dispare un evento de console log de sigo activo
setInterval(function() {
    console.log('Sigo activo');
}, 1000);

//Aquí dirá que z no existe, cuando lanza un error y avisa por que es, y deja de ejecutar, si no se tiene el cuidado va a parar por completo el proceso por ser monohilo

/*
let i = 0;
setInterval(function() {
    console.log(i)
    i++;

    if (i === 5) {
        var a = 3 + z
    }
}, 1000);
*/

console.log('Segunda instrucción');