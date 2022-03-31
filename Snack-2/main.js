/* 
Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */

let userNumber = parseInt(prompt('inserisci un numero'))

if (userNumber % 2 == 0 ) {
    console.log(`il numero è pari ${userNumber} `)
} else {
    userNumber += 1
    console.log(`il numero pari dopo il numero da te scelto è ${userNumber} `)
}
