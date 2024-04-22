function criaCalculadora(){
    return{
        display: document.querySelector('.display'),  
        
        
        
        
        inicia(){
            this.cliqueBotoes();
        },
        
        cliqueBotoes(){
            document.addEventListener('click',(e) =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                
                if(el.classList.contains('btn-del')){
                    this.deleteCaractere();
               }
                
               if(el.classList.contains('btn-eq')){
                    this.realizaConta();
               }
          
            }); 
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteCaractere(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
        //! criar validação para função eval
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
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); 



/*
Anotações Importantes:
- Sempre quando eu quero referênciar uma chave do meu objeto, dentro do meu objeto, eu preciso utilizar o "this". 

- Quando utilizo o document.eventList o meu this dentro desse escopo faz referência ao document para alterar isso posso utilizar arrowfunctions ou .bind(this) no final da função
*/