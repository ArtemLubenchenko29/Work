/* Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений. 
Найти процентное соотношение отрицательных, положительных и нулевых элементов массива. */

function uniqueArr(min, max, lengthR) {
    if (+min > +max) return [];
let n = Math.abs(+min) + Math.abs(+max) + 1;  
    if (lengthR > n) return [];
let arrOfRandom = Array.from(Array(n).keys()).map(x => x + +min);  
    for (let i = arrOfRandom.length - 1; i > 0; i--) {
         let j = ~~(Math.random() * i);           
         [arrOfRandom[i], arrOfRandom[j]] = [arrOfRandom[j], arrOfRandom[i]];
    }
    arrOfRandom.length = lengthR;
    return arrOfRandom;
  }
  let arr = uniqueArr(-15, 27, 10);
  console.log(arr);
  console.log(`Положительных:${(arr.filter(x => x > 0).length / arr.length) * 100}%`);
  console.log(`Равных нулю:${(arr.filter(x => x == 0).length / arr.length) * 100}%`);
  console.log(`Отрицательных:${(arr.filter(x => x < 0).length / arr.length) * 100}%`);