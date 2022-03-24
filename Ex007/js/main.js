// função fabrica
function criaCalculadora() {
    return {
        // Atributos //

        // aqui estamos selecionando o display
        display: document.querySelector('.display'),
        // aqui estamos selecionando o botao de clear( c )
        btnClear: document.querySelector('.btn-clear'),

        // Metodos //

        // metodo que inicia a calculadora
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        // função para pegar o enter
        pressionaEnter(){
           this.display.addEventListener('keyup', e =>{
               if(e.keycode === 13){
                   this.calculate(  )
               }
           })
        },
        // metodo que pega o click nos botoes
        cliqueBotoes(){
            // aqui está pegando o evento de click que acontece no document
            // arrow function, não perde a propriedade do this.
            document.addEventListener('click', (e) => {
                // o target mostra onde foi clicado 
                const el = e.target
                // se conter a classe btn-num(é um numero), chamara a function
                if(el.classList.contains('btn-num')){
                    this.btnForDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.clearOne()
                }
                if(el.classList.contains('btn-eq')){
                    this.calculate()
                }
            })
        },

        // metodo que adiciona o valor dentro do display
        btnForDisplay(valor){
            this.display.value += valor
        },

        // metodo que limpa o display
        clearDisplay(){
            this.display.value = ''
        },

        // metodo que apaga apenas 1 digito por vez
        clearOne(){
            // retira um pedaço da string, (tamanho da string, quantidade de caracteres)
            this.display.value = this.display.value.slice(0, -1)
        },

        // metodo que calcula 
        calculate(){
            let conta = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta
            }catch(e){
                alert('Conta inválida')
                return
            }
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()