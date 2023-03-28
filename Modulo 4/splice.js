//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elemen1, elemen2, elemen3);
//pop
const removidos = nomes.splice(  3, 2, 'Pandora', 'Ribeiro'); //Number.MAX_VALUE ---> ele contabiliza até o valor máximo.
console.log(nomes, removidos);

//Simulando pop ------ remove o ultimo
nomes.splice(-1, 1); //nomes.splice(nomes.lenght, 1);

//Simulando shift ---- remove o primeiro

nomes.splice(0, 1);

//Simulando push ---- adiciona no final

nomes.splice(nomes.length, 0, 'Airton');

//Simulando unshift ---- adiciona no começo

nomes.splice(0, 0, 'Gabriela');