/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */
const listaNomi = ["Gabriele", "Davide", "Arnoldo", "Fablo", "Peppino", "Ben",];
console.log(`lunghezza lista nomi ${listaNomi.length}`);
const listaCognomi = ["Escobar", "Skywalker", "Solo", "Batman", "Barbapapà", "Birillo", "Gilberti", "Prappappero", " Burundis",];
console.log(`lunghezza lista cognomi ${listaCognomi.length}`);



//ciclo for
/* for (let i = 0; i < listaCognomi.length; i++){

    if ( listaNomi.length != listaCognomi.length){

        listaNomi.push(listaNomi[i]);

    } 
}
console.log(`lunghezza lista nomi ${listaNomi.length}`);
console.log(`lunghezza lista cognomi ${listaCognomi.length}`); */

//ciclo while

let i = 0

while ( i < listaCognomi.length ){

    if ( listaNomi.length != listaCognomi.length){

        listaNomi.push(listaNomi[i]);
    }

    i++
}
console.log("LUNGHEZZA LISTE DOPO L'AGGIUNTA");
console.log(`lunghezza lista nomi ${listaNomi.length}`);
console.log(`lunghezza lista cognomi ${listaCognomi.length}`);