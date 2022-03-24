/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
...(spread)

Ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// metodo de copiar um objeto

const produto = {nome: 'Produto', preco: 1.8}
const caneca ={
    ...produto, // copia o objeto acima 
    material: 'porcelana'
}
caneca.nome = 'Outro nome'
caneca.preco = 2.5

console.log(produto)
console.log(caneca)

// metodo de copiar usando assing

const caneca2 = Object.assign({},produto,{material:'porcelana'})

// get Own property Descriptor (Descrição do objeto)

const produto2 = {nome: 'Produto', preco: 1.8}
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))