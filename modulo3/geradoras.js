function* generator1() {
    //Código qualquer ...
    yield 'Valor 1';
    //Código qualquer ...
    yield 'Valor 2';
    //Código qualquer ...
    yield 'Valor 3';
}

function* generator2(){
    for (let i=0; i<= 100; i++) {
        yield `Valor ${i}`;
        i++;
    }
}
function* generator3(){
    yield 0;
    yield 1;
    yield 2;
}
function* generator4(){
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = generator4();

function* generator5(){
    yield function(){
        console.log('Vim do y1')
    };
    return function(){
        console.log('Vim do return'); //return corta a função.
    }
    // ... cod
    yield function() {
        console.log('Vim do y2');
    };
}
const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();
