// Importando
// usando o as para trocar o nome da variavel (nome as nomeDoModulo)
import {nome as nomeDoModulo,sobrenome,idade,soma,Pessoa} from './modulo1'

// outro modo de importar tudo de uma vez
import * as MeuModulo from './modulo1'

// importando apenas o default
import defaultModulo from './modulo1'

console.log(nomeDoModulo, sobrenome, idade)
console.log(soma(5,4))

const p1 = new Pessoa('Zack','Code')
console.log(p1)

