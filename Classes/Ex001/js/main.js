class ValidateForm {
    constructor(){
        this.form = document.querySelector('.form')
        this.events()
    }
    events(){
        this.form.addEventListener('submit',e =>{
            this.handleSubmit(e)
        })
    }

    // Função para bloquear o envio do formulario
    handleSubmit(e){
        // Prevent Default = Para o formulario não ser enviado
        e.preventDefault()
        const validField = this.checkField()
        const passwordValid = this.passwordValid()

        if(validField && passwordValid){
            alert('Forms send')
            this.form.submit()
        }
    }

    passwordValid(){
        let valid = true

        const password = this.form.querySelector('.password')
        const repeatPassword = this.form.querySelector('.repeat-password')

        if(password.value !== repeatPassword.value){
            valid = false
            this.error(password,'Campos senha e repetir senha precisam ser iguais')
            this.error(repeatPassword,'Campos senha e repetir senha precisam ser iguais')
        }

        if(password.value.lenght < 6 || password.value.length  > 12){
            valid = false
            this.error(password,'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }

    // Função que confere o campos
    checkField(){
        let valid = true

        // Evita de enviar o erro toda hora(caso ele já existir)
        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.form.querySelectorAll('.validate')){
            const label = campo.previousElementSibling.innerText

            if(!campo.value){
                this.error(campo,`Campo ${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validUser(campo)) valid = false
            }
        }
        return valid
    }

    validUser(campo){
        const usuario = camp.value
        let valid = true

        if(usuario.length > 12 || usuario.length < 3){
            this.error(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)){
            this.error(campo, 'Usuário precisa conter apenas letras e numeros')
            valid = false
        }

        return valid
    }

    validCPF(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.error(campo,'CPF inválido')
            return false
        }
        return true
    }

    //Função de erro
    error(campo,msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend',div)
    }

}

const validate = new ValidateForm()