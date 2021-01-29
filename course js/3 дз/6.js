// Сохранить в массиве все столбцы которые не имеют ни одного нулевого элемента и сумма которых положительна - оформить в виде функции

let mas = [
    [0, -2, 5, 7, 4],
    [5, -5, 1, 0, 1],
    [2, 3, -1, 4, 4]
  ];
  function cut(arr) {
    let columns = new Array(arr[0].length).fill(1);
    let res = [];
    for (let i = 0; i < arr[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (!arr[j][i]) {
          columns[i] = 0;
          break;
        }
        sum += arr[j][i];
      }
      if (sum <= 0) {
        columns[i] = 0;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      res.push([]);
      for (let j = 0; j < columns.length; j++) {
        if (columns[j]) {
          res[i].push(arr[i][j]);
        }
      }
    }
    return res;
  }
  console.dir(cut(mas));