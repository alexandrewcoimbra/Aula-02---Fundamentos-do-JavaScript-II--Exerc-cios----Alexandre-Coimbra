// criando um array
const colors =["red", "green", "blue", "black", "white"];

// Tamanho do array

console.log(colors.length);

//Adicionar elemento

colors.push("yellow");

//Fatiamento do array

console.log(colors.slice(0,2));

// Remover um elemento do array (joga o elemento exluido numa variável)

colors.pop();

//Remover elemento pelo índice

colors.splice(0, 1);

// Iterando em um array

for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for (let color of colors) {
    console.log(color);
}

for (let color in colors) {
    console.log(color);
}

colors.forEach((color, index, colors) => {
    console.log(`${color} está no índice ${index} do array ${colors}`)
});

