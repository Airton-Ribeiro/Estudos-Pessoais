// function criaCalculadora() {
//     return {
//       display: document.querySelector(".display"),
  
//       inicia: function () {
//         this.cliqueBotoes();
//         this.pressionaEnter();
//       },
//       pressionaEnter() {
//         this.display.addEventListener("keypress", e => {
//           if (e.keycode === 13) {
//             this.realizaConta();
//           }
//         });
//       },
  
//       clearDisplay() {
//         this.display.value = "";
//       },
  
//       apagaUm() {
//         this.display.value = this.display.value.slice(0, -1);
//       },
  
//       realizaConta() {
//         let conta = this.display.value;
  
//         try {
//           conta = eval(conta);
//           if (!conta) {
//             alert("Conta Inválida");
//             return;
//           }
//           this.display.value = String(conta);
//         } catch (e) {
//           alert("Conta Inválida");
//           return;
//         }
//       },
  
//       cliqueBotoes() {
//         document.addEventListener("click", e => {
//           const el = e.target;
  
//           if (el.classList.contains("btn-num")) {
//             this.btnParaDisplay(el.innerText);
//           }
//           if (el.classList.contains("btn-clear")) {
//             this.clearDisplay();
//           }
//           if (el.classList.contains("btn-del")) {
//             this.apagaUm();
//           }
//           if (el.classList.contains("btn-eq")) {
//             this.realizaConta();
//           }
//         });
//       },
//       btnParaDisplay(valor) {
//         this.display.value += valor;
//       },
//     };
//   }
  
//   const calculadora = criaCalculadora();
//   calculadora.inicia();
function Calculadora(){
  this.display = document.querySelector(".display");
  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };
  this.pressionaEnter =  () => {
             document.addEventListener("keypress", e => {
               if (e.keycode === 13){ 
                 this.realizaConta();
               }               
             });
           };
  this.clearDisplay =  () => {
             this.display.value = "";
           };
  this.apagaUm =  () => {
             this.display.value = this.display.value.slice(0, -1);
           };
  this.realizaConta =  () => {
             let conta = this.display.value;
      
             try {
               conta = eval(conta);
               if (!conta) {
                 alert("Conta Inválida");
                 return;
               }
               this.display.value = String(conta);
             } catch (e) {
               alert("Conta Inválida");
               return;
             }
           };
  this.cliqueBotoes = () => {
             document.addEventListener("click", e => {
               const el = e.target;
      
               if (el.classList.contains("btn-num")) {
                 this.btnParaDisplay(el.innerText);
               }
               if (el.classList.contains("btn-clear")) {
                 this.clearDisplay();
               }
               if (el.classList.contains("btn-del")) {
                 this.apagaUm();
               }
               if (el.classList.contains("btn-eq")) {
                 this.realizaConta();
               }
             });
           };
  this.btnParaDisplay = (valor) => {
             this.display.value += valor;
           };              
} 
const calculadora = new Calculadora();
calculadora.inicia();