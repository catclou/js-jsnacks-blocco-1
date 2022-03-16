// 1) Creare una variabile con valore di partenza 0
let somma = 0;

// 2) Chiedere all'utente di inserire 10 numeri
for (i=1; i<=10; i++) {
    let num = parseInt(prompt("Digita un numero (in cifre)"));
    if(isNaN(num)) {
        num = 0;
    }
    // 3) Fare in modo che ogni nuovo numero inserito si vada a sommare ai precedenti
    somma += num;
}

// 4) Restituire a schermo la somma dei numeri
document.getElementById("somma").innerHTML = `La somma dei numeri che hai inserito è ${somma}`;

