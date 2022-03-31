/* Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */


const numbers = [10 , 13 , 5 , 6 , 7 , 31 , 32 ];

let result = 0

//ciclo for
/* for ( let i = 0; i < numbers.length ; i++){

    const numberElement = numbers[i];

    if( i % 2 != 0) {
    
        result += numberElement
    }
}

console.log(`la somma dai numeri in posizione dispari è ${result}`)

 */


//ciclo while 

let i = 0;

while ( i < numbers.length){

    const numberElement = numbers[i];

    if( i % 2 != 0) {
    
        result += numberElement
    }

    i++
}

console.log(`la somma dai numeri in posizione dispari è ${result}`)


