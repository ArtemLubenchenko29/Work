// Найти сумму цифр числа которые кратны двум
var string = '2548602';
var sum = 0;
for (x of string)
{
  if (!(x % 2)) {
    sum += +x;
  }
}
console.log(sum);
