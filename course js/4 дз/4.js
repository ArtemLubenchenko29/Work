/* Задано предложение - подсчитать количество вхождений каждого слова в предложении. 
Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось */

var string = 'Ехал грека через реку, видит грека в реке рак. Сунул грека руку в реку, рак за руку греку цап!'
 
function shazam(str){ 
str = str.replace(/[^а-яА-ЯёЁ ]/g, '');
var arr = str.split(' ');
var obj = {};
arr.forEach( function(item) { item in obj ? obj[item]++ : obj[item] = 1; } );
Object.getOwnPropertyNames(obj).forEach(
function(item){ 
    console.log(item + ': ' + obj[item]); 
}
);
}
shazam(string);