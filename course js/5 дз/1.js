/* Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям. 
Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,11,6,7,21]*/

var mas = [1, 2, 4, [8, 4, 12], [13, 29, 11], [0, 5, 3, 11], 5, 6, 7, [3, 8, 21], 3];
var masForRes = [];
for (let i in mas){
    if(Number.isInteger(mas[i]) === true){
        masForRes.push(mas[i]);
    }
    for(let j in mas[i]){
        masForRes.push(mas[i][j]);
    }
}
function originalElements(num){
    let result = [];
    for(let i in num){
        if(result.indexOf(num[i]) == -1){
            result.push(num[i]);
        }
    }
    return console.log(result)
}
originalElements(masForRes);