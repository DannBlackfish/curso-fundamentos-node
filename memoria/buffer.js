//Guardar un byte de información
//let buffer = Buffer.alloc(1)

//Un arrray con datos
//let buffer = Buffer.from([1, 2, 3]);

//traducción a datos binarios
//let buffer = Buffer.from('Hola');

//console.log(buffer);

let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString())