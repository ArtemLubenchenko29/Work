// Дано число - вывести первые N делителей этого числа нацело.
var input = 140;
var n = 10;
var output = [];
for (var i = 1; i <= input && output.length <= n-1; i++)
  {
    if (input % i == 0){
      output.push(i);
    }
  }
  console.log(output);