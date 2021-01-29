// Написать рекурсивную функцию которая выводит абсолютно все элементы ассоциативного массива (объекта) - любого уровня вложенности
var mas = [{a: [3,4,5], b: 'Junior', c: {c1: 3, c2: 8}, d: 397}];

function recursive(i){
    if(i < mas.length){
        console.log(mas[i]);
    }else if(i > mas.length){
        return;
    }
    recursive(++i)
}
recursive(0)