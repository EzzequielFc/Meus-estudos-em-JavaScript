
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

// Criar o botao de feito, que irá riscar a tarefa completa
function criarBotaoFeito(li){
    li.innerText += ' '
    const botaoFeito = document.createElement('button')
    botaoFeito.innerText = 'Feito'
    // Seta um atributo do tipo class no botão
    // Atributo // Nome
    botaoFeito.setAttribute('class', 'risca')
    li.appendChild(botaoFeito)
}

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
    criarBotaoFeito(li)
    salvarTarefas()
}

// Função que pega o evento de click no botão adicionar 
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
})

// Função que pega o evento de click em apagar
document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        // Ele busca quem é o pai do elemento, assim apagando 
        // a lista completa
        el.parentElement.remove()
        salvarTarefas()
    }
})

// Função que risca uma atividade já feita
document.addEventListener('click',function(e){
    const risc = e.target
    if(risc.classList.contains('risca')){
        risc.parentElement.setAttribute('class','riscado')
    }
})

// Função que volta a atividade riscada
document.addEventListener('click',function(e){
    const risc = e.target
    if(risc.classList.contains('riscado')){

    }
})
