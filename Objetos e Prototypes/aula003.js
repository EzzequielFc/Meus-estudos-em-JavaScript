function Produto(nome, preco, estoque) {

    this.nome = nome
    this.preco = preco
     
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // configuravél
        get(){
            return estoque
        },
        set(valor){
            if(typeof valor !== 'number'){
                console.log('Bad value')
                return
            }
            this.estoque = valor
        }   
    })

}
const p1 = new Produto('Camisa', 20, 3)
console.log(p1.estoque) 