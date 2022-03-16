// 1) Chiedi all'utente di inserire due numeri
let primoNumero = prompt("Digita il primo numero (in cifre)");
let secondoNumero = prompt("Digita il secondo numero (in cifre)");

// EDIT: valido l'input utente, verificando che sia un numero
if (isNaN(primoNumero) || isNan(secondoNumero)) {
    document.getElementById("risultato").innerHTML = `Ma io ti avevo chiesto di digitare delle cifre... :(`;
}

// 2) Metti i due numeri a confronto
// 3) Stampa quello che risulta maggiore
if (primoNumero > secondoNumero) {
    document.getElementById("risultato").innerHTML = `Il primo numero (${primoNumero}) è maggiore`;
} else if (primoNumero < secondoNumero) {
    document.getElementById("risultato").innerHTML = `Il secondo numero (${secondoNumero}) è maggiore`;
} else {
    document.getElementById("risultato").innerHTML = `Hai inserito due numeri uguali...`;
}