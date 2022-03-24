// Fetch API

document.addEventListener('click', e => {
    // estamos pegando a tag do elemento capturado
    const el = e.target
    // convertendo para letras minusculas
    const tag = el.tagName.toLowerCase()

    // if procurando o 'a' pq é a secção de links
    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    // vamos saber qual link está sendo clickado
    const href = el.getAttribute('href')

        fetch(href)
            .then(response => response.text())
            .then(html => carregaResultado(html))
            .catch(e => console.log(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

fetch('pagina1.html')
    .then(respota => {
        if(respota.status !== 200) throw new Error('ERRO 404 MEU')
        return respota.text()
    })
    .then(html => console.log(html))
    .catch(e => console.log(e))