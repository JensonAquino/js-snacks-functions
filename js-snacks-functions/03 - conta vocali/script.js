/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function returnVocal (word){
 const vocals = ["a","e","i","o","u"]
 let count = 0
    for(i = 0; i < word.length; i++){
const curName = word[i]
if (vocals.includes(curName.toLowerCase())){
    count++;
}
    }
return count
}


// Invoca la funzione qui e stampa il risultato in console

console.log(returnVocal(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)