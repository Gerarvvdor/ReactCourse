//ternarios
const autenticado = true
const saldo = 1000
const pagar = 5000
const tarjeta = true



if (autenticado) {
    console.log('Estás autenticado')
} else {
    console.log('No estás autenticado')
}

/*
autenticado ? 
    console.log("Estas autenticado") : 
    console.log("No estas autenticado")*/


saldo > pagar || tarjeta ? 
    console.log("Si puedes pagar") :
    console.log("No  puedes pagar")

