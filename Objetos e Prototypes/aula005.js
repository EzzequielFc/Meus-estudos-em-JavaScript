// Prototypes
  
function Pessoa(nome){
    this.nome = () => this.nome
}

Pessoa.prototype.nome = function(){
    return this.nome
}