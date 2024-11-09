//Optional chaining '?'
const alumno = {
    nombre: 'Juan',
    clase: 'programación',
    aprobado: true,
    examenes: {
        examen1: 10,
        examen2: 8
    }
}

console.log(alumno.examenes?.examen1);

console.log('despues de ALUMNO')


//Nulish coolescing operator (??)
const pagina = 10 ?? 1 
console.log(pagina);
