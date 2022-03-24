function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar ou não o valor
        configurable: false // configuravél
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // pode alterar ou não o valor
            configurable: false // configuravél
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // pode alterar ou não o valor
            configurable: false // configuravél
        }
    })

}
const p1 = new Produto('Camisa', 20, 3)
console.log(p1)