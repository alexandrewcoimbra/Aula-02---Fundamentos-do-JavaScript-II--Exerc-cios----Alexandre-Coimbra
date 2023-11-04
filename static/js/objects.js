// Criando um objeto
const user = {
    name: "Alexandre",
    age: 24,
};

user.age = 25;

//obtendo os valores

console.log(Object.values(user));

//obtendo as chaves

console.log(Object.keys(user));

// Destructuring

const userCopy = { ...user} //modificar essa cópia não altera a cópia original

const numbers= [1, 2, 3, 4, 5]
const numbersCopy = [...numbers]; // se n tiver os 3 pontinhos vai alterar a original

let number = 2;
let numberCopy = number;
