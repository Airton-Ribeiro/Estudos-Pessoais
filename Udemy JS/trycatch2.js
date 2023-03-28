// try {
// console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe.');
//     console.log(err);
// }

// function soma (x, y){
//     if (typeof x !== 'number'  || typeof y !== 'number') {
//         throw new Error('x e y precisam ser numeros.')
//     }
//     return x+y;
// }
// try {console.log(soma(1,2));
// console.log(soma('1',2));

// } catch(error){
//     console.log('Alguma coisa mais amigavel pro usuario');
// }

// try {
//   // console.log(a); forçando o erro
//   //É executada quando não há erros
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");
//   try {
//     console.log(b);
//   } catch {
//     console.log("Deu erro.");
//   }
// } catch (e) {
//   //É executada quando há erros
//   console.log("Tratando o erro");
// } finally {
//   //Sempre
//   console.log("FINALLY:Eu sempre sou executado");
// }