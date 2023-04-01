class ValidForms{
    constructor(){
        this.forms = document.querySelector('.forms');
        this.events();    
    }

    events(){
        this.forms.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const validFields = this.isValid();
        const validPasswords = this.passwordsIsValid();


        if(validFields && validPasswords){
            alert('Formulario enviado.');
            this.forms.submit();
        }
    }
    passwordsIsValid(){
        let valid = true;

        const password = this.forms.querySelector('.senha');
        const repeatPassword = this.forms.querySelector('.repetir-senha');

        if(password.value !== repeatPassword.value){
            valid = false;
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais.');
            this.createError(repeatPassword, 'Campos senha e repetir senha precisam ser iguais.');
        }
        if(password.length <6 || repeatPassword.length <12){
            valid = false;
            this.createError(password, 'A senha precista estar entre 3 e 12 caracteres.');
            this.createError(repeatPassword, 'A senha precista estar entre 3 e 12 caracteres.');
        }

        return valid;
    }
    isValid(){
        let valid = true;
        for (let errorText of this.forms.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for(let field of this.forms.querySelectorAll('.validate')){
            const label = field.previousElementSibling.innerText;
            if(!field.value){
                this.createError(field, `Campo ${label} em branco, negado.`);
                valid = false;
            }            
            if(field.classList.contains('cpf')){
                if(!this.ValidateCPF(field)) valid = false;
            }
            if(field.classList.contains('usuario')){
                if(!this.ValidateUser(field)) valid = false;
            }
        }       
        return valid;
    }
        ValidateCPF(field){
            const cpf = new Cpf(field.value);

            if(!cpf.valid()){
                this.createError(field, 'CPF inválido');
                return false;
            }
        return true;
    }
        ValidateUser(field){
            const user = field.value;
            let valid = true;
            if(user.length < 3 || user.length > 12){
                this.createError(field, 'Usuário precista estar entre 3 e 12 caracteres.');
                valid = false;
            }
            if(!user.match(/^[a-zA-Z0-9]+$/g)){
                this.createError(field, 'Nome de usuário precista conter apenas letras e/ou números.');
                valid = false;
            }
            return valid;
        }
    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}
const valida = new ValidForms();