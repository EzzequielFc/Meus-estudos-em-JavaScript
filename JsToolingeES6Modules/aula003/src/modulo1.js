const nome = 'Ezequiel'
const sobrenome = 'Miranda'
const idade = 30

function soma (x,y){
    return x + y
}

// torna o padrao do modulo
export default function  soma2 (x,y){
    return x + y
}

export class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome
        this.sobrenome =  sobrenome
    }
}

// Exportando apenas o nome
export {nome,sobrenome,idade,soma }

// Exportando diretamente

/**
 * export const nome = 'Ezequiel'
 * 
 * export function soma(x,y){
 *  return x+y
 * }
 * 
 * export class Pessoa {
 *   constructor(nome,sobrenome){
 *      this.nome = nome
 *      this.sobrenome = sobrenome
 *  }
 *  
 * }
 */