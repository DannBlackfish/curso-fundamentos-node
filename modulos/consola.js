console.log('Algo');
console.info('Algo');
console.error('Detecta un error');
console.warn('Muestra un warning');

//console.table('Muestra datos en forma de tabla')
var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]
console.table(tabla)

//console.group('Permite agrupar un montón de logs que forman parte de una cosa')
/* console.group('Conversación')
console.log('Hola');
console.group('bla')
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversación');

console.log('otra cosa de otra función'); */
/* 
function funcion1(){
    console.group('funcion 1')
    console.log('Esto es de la función 1')
    console.log('Esto tambien')
    console.log('Esto tambien')
    funcion2()
    console.groupEnd('funcion 1')

}

function funcion2() {
    console.group('funcion 2')
    console.log('Ahora estamos en la función 2')
    funcion2()
    console.groupEnd('funcion 2')
}

console.log('empezamos')
funcion1(); */

//Contadores
console.count('veces');
console.count('veces');
console.count('veces');
//limpiar contador
console.countReset('veces');
console.count('veces');

