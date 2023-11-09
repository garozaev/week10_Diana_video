//ЗАТЕНЕНИЕ
console.log('Затенение');
let b = 8;
const a = 24;
let p = "я главная";
const c = 25;
const d = 10;

function home() {
    const b = 13;
    const a = 10;

    function room() {
        const b = 15;
        console.log(b);
        console.log(a);
    }
}


const sum = (a,b) => {
    console.log(a);
    return a + b;
};

console.log(sum(3,2));


function difference(c, d) {
    //let c = ; //параметры (c,d) ждут назначени,
    // это не переменные из глоб.обл.
    //let b = ; //как будто их должны присвоить,
    //как в этих примерах
    //но назначение происходит при вызове функции см.ниже
    const result = c - d;
    return result;
}

//console.log(difference(15, 5));//присвоятся параметры в функции

//console.log(difference(c, d));//возьмуться из глоб.обл. и вставятся в параметры функции

/*{
    const b = 100;
    console.log(b);
}*/

//function question(ingridien) {


//ingridien = ingridien + "кладу в тарелку";
//  console.log(ingridien);
//}
//question(p);