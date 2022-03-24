// Herança

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = quantia => {
    this.preoc += quantia
}
Produto.prototype.dessconto = quantia => {
    this.preoc -= quantia
}

function Camiseta(nome,preco,cor){
    // Está herdando Produto
    Produto.call(this,nome,preco)
}
// Criando o prototype de Produto para Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
// Está falando para usar o constructor de Camiseta, não o de Produto
Camiseta.prototype.constructor = Camiseta

function Caneca(nome,preco,material, estoque){
    Produto.call(this,nome,preco)
    this.material = material
    Object.defineProperty(this,'estoque',{
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number')return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Caneca',13, 'Plástico', 5)
console.log(caneca)