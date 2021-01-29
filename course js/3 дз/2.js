// Все скрипты которые используют в своей основе цикл - написать с помощью рекурсивных функций

// 2.2
function getFactorial(n){
  if (n === 1){
      return 1;
  }
  else{
       
      return n * getFactorial(n - 1);
  }
}
var result = getFactorial(5); 
console.log(result);

// 2.3
function recursive(input, n, output = [], i = 1){
  if(i <=  input && output.length <= n-1){
      if (!(input % i)){
          output.push(i);
      }
      i++;
      return recursive(input, n, output, i)
  }
  else return output;
}
console.log(recursive(140, 5));

// 2.4 
function value([a, ...b]){
  a % 2  && (a = 0);
  return b.length ? +a + value(b) : +a
}
console.log(value("2548862"))


// 2.5

function minNumberRecursion(x, b){
  return ++x % b ? minNumberRecursion(x, b) : x
}
console.log(minNumberRecursion(300, 17))




