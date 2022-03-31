//SNACK 1 
/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */

let result, userNumber;
result = 0;
let i = 1;


//con il ciclo while

/* 
while( i <= 5){
    
                userNumber = parseInt(prompt('inserisci un numero'))
                result = result + userNumber;
                i++;
      
                }

console.log(`la somma è ${result}`)
                 */

// con il ciclo for

 for(let i = 1; i <= 5; i++) {

    
    userNumber = parseInt(prompt('inserisci un numero'))
    result = result + userNumber;
    

    }

console.log(`la somma è ${result}`)
   
