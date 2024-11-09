const tecnologias = ['React', 'Angular', 'Vue']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nuevoArray = tecnologias.filter((tech) => console.log(tech))


//const resultado = nuevoArray.some(numero => numero > 10)

//Find devuelve el primer elemento que cumple con la condición
//const resultado = numeros.find(numero => numero > 10)

//every devuelve true si todos los elementos cumplen con la condición
//const resultado = numeros.every(numero => numero > 10)

//reduce recibe una función con dos parámetros, el acumulador y el elemento actual
//const resultado = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
const resultado = numeros.reduce((total,numero) => total + numero, 0)