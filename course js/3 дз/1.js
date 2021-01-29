// Все скрипты которые писали в рамках первого и второго задания - оформить в виде функций

// 1.1
function strNumber(a) {
    let array = ["Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"];
    return array[a - 1];
  }
   
  console.log(strNumber(4))

  // 1.2
function Value(a) {
    if (a < 0) {
        console.log('Отрицательное');
    } else if (a == 0) {
        console.log('Нулевое');
    } else if (a > 0) {
        console.log('Положительное')
    }
  }
  Value(3);

  // 1.3
function calc(a, b){

    if(b == "kb"){
        console.log(a * 1024);
    }else if(b == "mb"){
        console.log(a * 1024 * 1024);
    }else if(b == "gb"){
        console.log(a * 1024 * 1024 * 1024);
    }else if(b == "byte"){
        console.log(a);
    }
    }
    calc(10, "kb")

    // 1.4 
function  procentAllTheTime(a,b,c) {
    var procentAllTheTime = (((b * a) / 100) * c) / 1;
    console.log('Клиент заплатит процентов за все время' + ' ' + procentAllTheTime);
  }
  function procentOneYear(a,b,) {
    var procentOneYear = ((b * a) / 100) * 1;
    console.log(
        'Клиент заплатит процентов за один календарный год' + ' ' + procentOneYear);
  }
  function totalMoney(a,b,c) {
  
    var procentAllTheTime = (((b * a) / 100) * c) / 1;
    var totalMoney = b + procentAllTheTime;
    console.log('Клиент заплатит денег за все года' + ' ' + totalMoney);
  }
  procentAllTheTime(17,20000,4);
  procentOneYear(17,20000);
  totalMoney(17,20000,4);

  // 2.1
function reverseString(str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    return newString;
}
console.log (reverseString("JavaScript"))

// 2.2
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(8));

// 2.3
function simple(input, n){
  let output = [];
  for(let i = 1; i <= input && output.length <= n-1; i++)
  {
    if (!(input % i)){
      output.push(i);
    }
  }
  return output
}
console.log(simple(140, 5));

// 2.4
function value(string){
  let sum = 0;
  for ( x of string)
  {
    if (!(x % 2)) {
      sum += +x;
    }
  }
  console.log(sum)
}
value("254886")
  
// 2.5
function minNumber(x, b){
    while (true) {
      if (x % b==0) {
        console.log(x);
        break;
      }
      x++;
    }
    }
    minNumber(300, 17)
    
// 2.6
function fun(a, b)
{ a > b || ([a, b] = [b, a]);
  let length = b/2, k = 1;
  for (var i = 2; i <= length; ) {
      if(!(b % i) && !(a % i) ) {
      b /= i;
      a /= i;
      k *= i;
      }
      else i++
  }
  return k
}
console.log(fun(20, 30));







