const saldo = 1000
const pagar = 50
const tarjeta = false

if(saldo > pagar){
    console.log('Hay feria')}
else if(tarjeta){
    console.log('Hay feria')}
else{    
    console.log('No hay feria')
}

/*Operadpres logical or y logical and */

//Operador or
if(saldo > pagar || tarjeta){
    console.log('Hay feria')}
else{
    console.log('No hay feria')
}

//Operador and
if(saldo > pagar && tarjeta){
    console.log('Hay feria')}
else{
    console.log('No hay feria')
}