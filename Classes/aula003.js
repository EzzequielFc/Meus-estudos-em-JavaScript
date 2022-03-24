// Herança and Class

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} desligado`)
            return
        }
        this.ligado = false
    }
}

// o extens herda da classe acima
class Smartphone extends DispositivoEletronico{
    constructor(nome,cor){
        // chamamos a classe pai, com o super e passamos os parametros
        super(nome)
        this.cor = cor
    }
}
