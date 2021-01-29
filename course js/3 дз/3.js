// Написать функцию, которая транспонирует матрицу

var a = [[0, 1, 2], [3, 4, 5] ];
function TransMatrix(a)
{
    var m = a.length, n = a[0].length, AT = [];
    for (var i = 0; i < n; i++)
     { AT[ i ] = [];
       for (var j = 0; j < m; j++) AT[ i ][j] = a[j][ i ];
     }
    return AT;
}
console.dir(TransMatrix(a));