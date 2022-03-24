// Capturar evento de submit do formulario
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválido', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg)
})

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)

}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Ob grau 1', 'Ob grau 2', 'Ob grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc <= 18.4) return nivel[0]

}

function criaP() {
    // Criar um elemento paragrafo dentro do p
    const p = document.createElement('p')
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    // Linda o texto antigo
    resultado.innerHTML = ''
    // cria o paragrafo
    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)
}