// Literal
const pessoa = {
    nome: 'Zack',
    sobrenome: 'Francisco',
    falarNome(){
       return (`${this.nome} está falando seu nome`)
    }
}
const chave = 'nome'
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa[chave])

// Constructor

function Humano(nome,sobrenome){
    this.nome = nome
    this.nome = nome
    // congela 
    Object.freeze(this)
}
const h1 = new Humano('Ezequiel', 'Campos')
console.log(h1)