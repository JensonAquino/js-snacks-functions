/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const result = []
function filtraIniziali (parole, lettera) {
    let curName = parole[i]
    for (let i = 0; i < parole.length; i++) {
    
        if (lettera === curName[0]) {
            risultato.push(curName);
        }
    }
    return result;
}
// Invoca la funzione qui e stampa il risultato in console
const filtro = filtraIniziali(names, "A")
console.log(filtro)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

