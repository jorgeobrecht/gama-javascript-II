const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?  (S/N) \n')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  console.log(livros.map(item => item.categoria).filter((value, index, self) => self.indexOf(value) === index))

  var entradaCategoria = readline.question('Qual categoria voce escolhe: ')

  var retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  if(retorno.length){
  console.table(retorno)
  }else{
    while(!retorno.length){
    entradaCategoria = readline.question('Categoria inexistente,favor digitar uma valida: ')
    retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    }
    console.table(retorno)
  }
  
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados)
}