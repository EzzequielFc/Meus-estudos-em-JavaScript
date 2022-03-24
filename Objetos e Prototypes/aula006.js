// New Object -. Object.prototype

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}
Object.setPrototypeOf(objB, objA)// setou o proto de b o a

// Exemplo

function Produto(nome,preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camisa', 50)
p1.desconto(100)
p1.aumento(100)

 //Passando prototype

 const p2 = {
     nome: 'caneca',
     preco: 15
 }
 Object.setPrototypeOf(p2, Produto.prototype)
  