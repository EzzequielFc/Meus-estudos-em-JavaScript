// Promises

function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    // Promise = timer
    return new Promise((resolve, reject) => {
        // Reject quando der errado, retorna algo
        if(typeof msg !== 'string') reject ('BAD VAlUE')

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })


}
espera('Frase 1', aleatorio(1, 3))
    .then((resposta) => {
        console.log(resposta)
        return espera('Frase 2', aleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return espera(111,aleatorio(1,3))
    })
    .then(resposta=>{
        console.log(resposta)
    })
    // Catch mostra o erro
    .catch(e =>{
        console.log(`ERRO.: ${e}`)
    })
