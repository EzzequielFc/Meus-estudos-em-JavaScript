// Metodos uteis para Promises

function rand(min,max){
    min * 1000
    max * 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    // Promise = timer
    return new Promise((resolve, reject) => {
        // Reject quando der errado, retorna algo
        if(typeof msg !== 'string'){
            reject ('BAD VAlUE')
            return
        } 
        setTimeout(() => {
            resolve(msg)
            return
        }, tempo);
    })
}

/*** 
* Promise.all -> Resolve todas as promessas esperando todo o tempo
* Promisse.race -> Resolve a promessa com o menor tempo
* Promise.resolve -> Espera uma promessa resolvida
* Promise.rejec -> Rejeita a promessa de uma vez
***/

const promises = [
    //'Primeiro Valor',
    espera('Promise 1',3000),
    espera('Promise 2',300),
    espera('Promise 3',5000),
    //espera(1000,1000),
    //'Outro valor'
]

Promise.race(promises)
    .then(valor =>{
        console.log(valor)
}).catch(function(erro){
    console.log(erro)
})

//  Promise resolve

function baixarPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return espera('Baixei a página', 3000)
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))

