// Setter e Getter em  Classes

const _velocidade = Symbol() // não pode ser alterado
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }
    // pegar o valor
    get velocidade(){
        return this[_velocidade]
    }

    // setar o valor
    set velocidade(valor){
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    acelerar(){
        if(this[_velocidade] >= 100)return
        this[_velocidade]++
    }
}
