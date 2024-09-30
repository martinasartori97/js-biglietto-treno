// chiedere all'utente  il numero di chilometri che vuole percorrere
let chilometri = prompt("quanti chilometri vuoi percorrere?");
chilometri = Number (chilometri);
console.log(chilometri);


// chiedere l'età del passeggero
let eta = prompt("qual è la tua età?");
eta = Number (eta);
console.log(eta);

// prezzo per chilometro
const prezzoalkm = 0.21;

// calcolo del prezzo totale
let prezzototale = chilometri * prezzoalkm


// applicare uno sconto del 20% sui minorenni e del 40% per gli over 65
if (eta < 18) {
    prezzofinale = 
} else if (eta > 65){
    prezzofinale = 
}




