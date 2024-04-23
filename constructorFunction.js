function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaEnter();
    }; 

    this.capturaEnter = () => {
        this.display.addEventListener('keyup',(e) => {
           if(e.code !== 'Enter') return;
           this.realizaConta();
        });
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e)=>{
            const el = e.target;

            if(el.classList.contains('btn-num'))this.addNodisplay(el);          
            if(el.classList.contains('btn-clear'))this.limparDisplay();
            if(el.classList.contains('btn-del'))this.deleteCaractere();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
      
    this.addNodisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    
    this.limparDisplay = () => this.display.value = '';
    this.deleteCaractere = () => this.display.value = this.display.value.slice(0,-1);  
    
    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida')
                return;
            }

            this.display.value = conta;

        } catch (e) {
                alert('Conta inválida');
                return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();