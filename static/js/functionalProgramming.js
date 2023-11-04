// Principios da programação funcional

// 1) Imutabilidade 
// 2) Funções Puras

// let counter = 0;

// function modificaContador () {
//     counter++;
// }

// modificaContador();

const people = [
    {name: "John", age: 22},
    {name: "Mary", age: 16},
    {name: "Peter", age: 23}
];

// Map

const peopleNames = people.map((person, index) => `Pessoa ${index + 1}: ${person.name}`);

// Filter

const minors = people.filter(person => person.age < 18)

// Reduce

const sumOfAges = people.reduce((accumulator, person) => accumulator + person.age, 0 );

// Sort

const peopleOrderedByAge = [...people].sort((a, b) => a.age - b.age); //Só necessário fazer isso com números.