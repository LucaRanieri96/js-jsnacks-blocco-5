// Snack 1:
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. (modificato)

const zucchine = [
  {
    varietà: "diajd",
    peso: 50,
    lunghezza: 30,
  },
  {
    varietà: "diajd",
    peso: 40,
    lunghezza: 20,
  },
  {
    varietà: "diajd",
    peso: 60,
    lunghezza: 23,
  },
  {
    varietà: "diajd",
    peso: 42,
    lunghezza: 78,
  },
  {
    varietà: "diajd",
    peso: 23,
    lunghezza: 54,
  },
  {
    varietà: "diajd",
    peso: 43,
    lunghezza: 42,
  },
  {
    varietà: "diajd",
    peso: 423,
    lunghezza: 76,
  },
  {
    varietà: "diajd",
    peso: 65,
    lunghezza: 43,
  },
  {
    varietà: "diajd",
    peso: 12,
    lunghezza: 76,
  },
  {
    varietà: "diajd",
    peso: 32,
    lunghezza: 354,
  },
];

// inizializzo una variabile somma
let sum = 0;

// ciclo dentro l'array zucchine e prendo per ogni oggetto il suo peso
// e lo sommo

zucchine.forEach(object => {
  sum += object.peso;
  return sum
})

console.log(sum);