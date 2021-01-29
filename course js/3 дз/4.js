// Написать функцию, которая умножает две матрицы

var a = [[0, 1] , [2, 3]];
var b = [[2, 5] , [7, 8]];
function SumMatrix(a,b)
{   
    var m = a.length, n = a[0].length, c = [];
    for (var i = 0; i < m; i++)
     { c[ i ] = [];
       for (var j = 0; j < n; j++) c[ i ][j] = a[ i ][j]+b[ i ][j];
     }
    return c;
}
console.dir(SumMatrix(a,b));