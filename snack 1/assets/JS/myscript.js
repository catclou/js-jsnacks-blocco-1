let primoNumero = prompt("Digita il primo numero (in cifre)");

let secondoNumero = prompt("Digita il secondo numero (in cifre)");

console.log(primoNumero, secondoNumero);

if (primoNumero > secondoNumero) {
    console.log(`Il primo numero è maggiore`);
    document.getElementById("risultato").innerHTML = `Il primo numero (${primoNumero}) è maggiore`;
} else if (primoNumero < secondoNumero) {
    console.log(`Il secondo numero è maggiore`);
    document.getElementById("risultato").innerHTML = `Il secondo numero (${secondoNumero}) è maggiore`;
} else {
    console.log(`Hai scritto due numeri uguali!`);
    document.getElementById("risultato").innerHTML = `Hai inserito due numeri uguali...`;
}