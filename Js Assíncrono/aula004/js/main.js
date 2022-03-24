// função de request -> busca as paginas
const request = obj => {
    return new Promise((resolve, reject) => {
        // cria um novo objeto
        const xhr = new XMLHttpRequest()
        // função open para abrir o request
        xhr.open(obj.method, obj.url, true)
        // função para enviar um request
        xhr.send()

        // espera o evento de load
        xhr.addEventListener('load', () => {
            // Entre 200 e 299 é status de sucesso
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

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

async function carregaPagina(el) {
    // vamos saber qual link está sendo clickado
    const href = el.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href
    }
    try{
        const response = await request(objConfig)
    carregaResultado(response)
    } catch(e) {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}