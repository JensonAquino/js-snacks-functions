/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function salutoConNome(nome) {
    return `Ciao ${nome}`;
}

// Esempio di utilizzo

// Invoca la funzione qui e stampa il risultato in console
const messaggio = salutoConNome(name);

console.log(messaggio);


//Risultato atteso se si passa 'Mario': // ciao Mario