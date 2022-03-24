
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

// Função para criar um elemento lista
function criarLi() {
    const li = document.createElement('li')
    return li
}

// Função para pegar o enter pressionado
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value)
    }
})

// Função para limpar o input e dar foco para proxima tarefa
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

// Função para criar um botao de apagar
function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApgar = document.createElement('button')
    botaoApgar.innerText = 'Apagar'
    // Seta um atributo do tipo class no botão
    // Atributo // Nome
    botaoApgar.setAttribute('class', 'apagar')
    li.appendChild(botaoApgar)
}

// Função para criar tarefa
function criarTarefa(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

// Função que pega o evento de click no botão adicionar 
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
})

// Função que pega o evento de click em apagar
document.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        // Ele busca quem é o pai do elemento, assim apagando 
        // a lista completa
        el.parentElement.remove()
        salvarTarefas()
    }
})

// Função para salvar as tarefas
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        // replace tira a palavra apagar
        tarefaTexto = tarefaTexto.replace('apagar','').trim
        // Armazena as tarefas dentro de um array
        listaDeTarefas.push(tarefaTexto)
    }

    // salve no local storage do navegador
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        criarTarefa(listaDeTarefas)
    }
}

adicionaTarefasSalvas()