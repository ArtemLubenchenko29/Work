//Найти номер cтроки двумерного массива сумма которой является максимальной

var items = [
    [1, 2, 7],
    [3, 4, 8],
    [5, 6, 1]
];
   
var result = {
      targetIndex: 0,
      sum: 0
};
   
   
for(let i = 0; i < items.length; i++) {
      var currentSum = items[i].reduce((prev, current) => prev + current);
      if (result.sum <= currentSum) {
          result.sum = currentSum;
          result.targetIndex = i + 1;
      }
}
   
console.log(`Номер строки двумерного массива сумма которой является максимальной - ${result.targetIndex}`);
console.log(`Сумма - ${result.sum}`); 

//Найти номер столбца двумерного массива сумма которого является максимальной

var items = [ 
    [1, 2, 7], 
    [3, 4, 8], 
    [5, 6, 4] 
];
   
var result = {
      targetIndex: 0,
      sum: 0
};
   
   
for(let i = 0; i < items[0].length; i++) {
    const currentSum = items.reduce((prev, current) => prev + current[i], 0);
     if (result.sum <= currentSum) {
         result.sum = currentSum;
         result.targetIndex = i + 1;
     }
}
   
console.log(`Номер столбца двумерного массива сумма которого является максимальной - ${result.targetIndex}`);
console.log(`Сумма - ${result.sum}`);