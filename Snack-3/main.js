/* Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
 */

const listaNomi = ["Gabriele", "Davide", "Arnoldo", "Fablo", "Peppino", "Ben",];

const listaCognomi = ["Escobar", "Skywalker", "Solo", "Batman", "Barbapapà", "Birillo"];

 let fakeGuest = 0;

 const fakeGuestList = [];
//ciclo for
  for (let i= 0; i<6; i++){
    
      fakeGuest = listaNomi[Math.floor(Math.random() * listaNomi.length)] + ' ' + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

      console.log(fakeGuest)

      fakeGuestList.push(fakeGuest);


  }

//ciclo while
 let c = 0;

 while ( c < 6){

     fakeGuest = listaNomi[Math.floor(Math.random() * listaNomi.length)] + ' ' + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

     console.log(fakeGuest)

     fakeGuestList.push(fakeGuest);
    
     c++;
    
 }

