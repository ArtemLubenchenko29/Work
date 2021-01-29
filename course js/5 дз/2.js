// Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные

function testUnique(A)
{   
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] === A[j]) return false; }
     }
    return true;
}
console.log(testUnique([0, 1, 5, 8]));  // true
console.log(testUnique([0, 1, 5, 8, 5, 1]));  // false