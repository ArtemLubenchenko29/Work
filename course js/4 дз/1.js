/* Написать функцию которая генерирует массив случайных значений, таким образом что все элементы результирующего массива являются уникальными. 
Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и отрицательными, 
и еще одним параметром количество значений которые нужно сгенерировать. Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.*/

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