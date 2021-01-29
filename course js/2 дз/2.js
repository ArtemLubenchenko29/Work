// Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
var inputNumber = 5;
var total = 1;
for (i = 0; i < inputNumber; i++){
    total *= inputNumber - i;
}
console.log(total);