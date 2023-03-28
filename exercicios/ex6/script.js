// const inputTarefa = document.querySelector(".input-tarefa");
// const botaoAdicionar = document.querySelector(".btn-tarefa");
// const listaTarefas = document.querySelector(".tarefas");
// let array = [];
// let tarefaLi = 0;
// function funcionar() {
//   let i;
//   array.push(inputTarefa.value);

//   array[i] = document.createElement("li");
//   let apagar = document.createElement("button");
//   apagar.textContent = "Apagar";
//   apagar.classList.add("apagar");
//   array[i].textContent = inputTarefa.value;
//   array[i].appendChild(apagar);
//   listaTarefas.appendChild(array[i]);

//   apagar.addEventListener("click", function (event) {
//     apagar.parentElement.remove();
//     salvarTarefas();
//   });

//   console.log(array);

//   inputTarefa.value = "";
//   salvarTarefas();
// }
// function salvarTarefas(){
//   const liTarefas = listaTarefas.querySelectorAll('li')
//   const listaDeTarefas = [];
//   for (let tarefa of liTarefas){
//     let tarefaTexto = tarefa.innerText;
//     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//     listaDeTarefas.push(tarefaTexto);
//   }
//   const tarefasJSON = JSON.stringify(listaDeTarefas);
//   localStorage.setItem('tarefas', tarefasJSON);

// }

// function adcionaTarefasSalvas(){
//   const tarefasMostrar = localStorage.getItem('tarefas');
//   const listaDeTarefas = JSON.parse(tarefasMostrar);

//   for (let tarefa of listaDeTarefas){
    

//     listaDeTarefas[tarefa] = document.createElement("li");
//     let apagar = document.createElement("button");
//     apagar.textContent = "Apagar";
//     apagar.classList.add("apagar");
//     listaDeTarefas[tarefa].appendChild(apagar);
//     listaTarefas.appendChild(listaDeTarefas[tarefa]);
  
//     apagar.addEventListener("click", function (event) {
//       apagar.parentElement.remove();
//       salvarTarefas();
//     });
//   }
// }

// botaoAdicionar.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   funcionar();
// });
// inputTarefa.addEventListener("keypress", function (event) {
//   if (event.keyCode === 13) {
//     if (!inputTarefa.value) return;
//     funcionar();
//   }
// });
// adcionaTarefasSalvas();

// // const inputTarefa = document.querySelector('.input-tarefa');
// // const botaoAdicionar = document.querySelector('.btn-tarefa');
// // const listaTarefas = document.querySelector('.tarefas');
// // botaoAdicionar.addEventListener('click', function(evento){
// //     evento.preventDefault();
// //     let tarefas = inputTarefa.value;
// //     let tarefasLi = document.createElement('li');
// //     let apagar =  document.createElement('button');
// //     apagar.textContent = 'Apagar';
// //     tarefasLi.textContent = tarefas;
// //     listaTarefas.appendChild(tarefasLi);
// //     tarefasLi.appendChild(apagar);
// //     inputTarefa.value = '';
// // })
const inputTarefa = document.querySelector(".input-tarefa");
const botaoAdicionar = document.querySelector(".btn-tarefa");
const listaTarefas = document.querySelector(".tarefas");


function criaLi (){
    const li = document.createElement('li');
    return li;
}
function criaCheckbox(li){
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    li.appendChild(checkbox);
}
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    botaoApagar(li);
    criaCheckbox(li);
    limpaInput();
    salvarTarefas();
}
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function botaoApagar(li){
    li.innerText += ' ';
    const apagar = document.createElement('button');
    apagar.innerText = 'Apagar';
    // apagar.classList.add('apagar'); seta classe para o botão
    apagar.setAttribute('class', 'apagar')
    li.appendChild(apagar);
}
function salvarTarefas(){
    const liTarefas = listaTarefas.querySelectorAll('li')
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  
  }
  function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
  }
  
botaoAdicionar.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})
inputTarefa.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});
document.addEventListener('click', function(evento){
    const el = evento.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    salvarTarefas();
})
adicionaTarefasSalvas();