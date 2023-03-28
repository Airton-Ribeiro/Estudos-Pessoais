//Escreva uma função que recebe dois numeros e retorna o maior deles

// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.ceil(r);
// }
// function retornaMaior() {
//   let randUm = 0;
//   let randDois = 0;
//   const min = 1;
//   const max = 60;
//   randUm = random(min, max);
//   randDois = random(min, max);
//   console.log(randUm, randDois);

//   const randomico = {
//     randUm: this.randUm,
//     randDois: this.randDois,
//     retornar() {
//       if (randUm > randDois) {
//         console.log(
//           `O valor de ${randUm} é o maior valor entre os dois números`
//         );
//       } else if (randDois > randUm) {
//         console.log(
//           `O valor de ${randDois} é o maior valor entre os dois números. `
//         );
//       } else {
//         console.log("Existe algum erro na função.");
//       }
//     }
    
//   }
//  randomico.retornar();
// }

// retornaMaior();


const max = (m, n) => m>n ? m : n;
console.log(max(7, 4));