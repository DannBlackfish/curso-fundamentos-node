//El código no debe de guardar ninguna clave o información que constanteme vaya a cambbiar, para eso están las variables de entorno 
//Por fuera se declara la variable
//Podemos darle un valor por defecto 
//Se ponen las mayúsculas son las variables de entonro que vienen desde fuera
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

