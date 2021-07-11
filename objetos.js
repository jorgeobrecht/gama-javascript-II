const pessoa = {
    nome: "Jorge",
    idade: 25,
    cidade: "Rio de janeiro"
}

//Notação de ponto
console.log(pessoa.nome) //"Jorge"

//Notação de colchetes
console.log(pessoa['idade']) //25

//Como desestruturar Objetos 

const { nome, idade, cidade } = pessoa

console.log(nome) //"Jorge"
console.log(idade) //25
console.log(cidade) //Rio de janeiro