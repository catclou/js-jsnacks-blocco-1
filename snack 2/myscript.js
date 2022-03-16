// 1) L'utente inserisce due parole in successione, con due prompt
let primaParola = prompt("Digita la prima parola");
let secondaParola = prompt("Digita la seconda parola");

// 2) Il software stampa prima la parola più corta, poi la parola più lunga
if (primaParola.length < secondaParola.length) {
    document.getElementById("parolaCorta").innerHTML = `La parola più corta è "${primaParola}"`;
    document.getElementById("parolaLunga").innerHTML = `La parola più lunga è "${secondaParola}"`;
} else if (primaParola.length > secondaParola.length) {
    document.getElementById("parolaCorta").innerHTML = `La parola più corta è "${secondaParola}"`;
    document.getElementById("parolaLunga").innerHTML = `La parola più lunga è "${primaParola}"`;
} else {
    document.getElementById("parolaCorta").innerHTML = `Le due parole hanno pari lunghezza`;
}