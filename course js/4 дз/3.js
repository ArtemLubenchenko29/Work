// Все предыдущий задания на циклы - написать с помощью циклов for in и/или for of
// 2.1 
function reverseString(str){
  var newString = "";

  for (value of str)
  {
      newString = value + newString;
  }
  return newString;
}
console.log (reverseString("JavaScript"))

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

