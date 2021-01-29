/* Задан массив объектов студентов. Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5}
 с учетом только тех студентов которые активны. Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.*/

let students = [
    { name: "Ivan", estimate: 4, course: 1, active: true },
    { name: "Petr", estimate: 3, course: 1, active: false },
    { name: "Alex", estimate: 2, course: 4, active: false },
    { name: "Max", estimate: 5, course: 2, active: true },
    { name: "Anton", estimate: 2, course: 3, active: true },
    { name: "Roman", estimate: 3, course: 2, active: false },
    { name: "Vladimir", estimate: 2, course: 4, active: true },
    { name: "Oleg", estimate: 5, course: 3, active: false },
    { name: "Evgeniy", estimate: 5, course: 5, active: true },
    { name: "Pavel", estimate: 3, course: 5, active: true },
    { name: "Danil", estimate: 2, course: 3, active: true },
    { name: "Denis", estimate: 4, course: 4, active: false },
];
 
function avarageEst(students){
  let result = {};
  let len = students.length;
      for (let i = 0; i < len; i++) {
          let item = students[i];
          let course = item.course,
              estimate = item.estimate;
   
      if (item.active) {
      if (course in result) {
              ++result[course][1];
              result[course][0] += estimate;
          }
          else {
              result[course] = [estimate, 1];
          }
      }
  }
      for (let key in result)
      result[key] = result[key][0] / result[key][1];
    return result;
  };
  console.log("Средняя оценка активных студентов в разрезе курсов:", avarageEst(students));

function calculate(array) {
    let result = {};
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let item = array[i];
        let course = item.course;

        if (!(course in result)) 
          result[course] = 0
        if (!item.active) 
          ++result[course];
    }
    return result;
}

console.log("Количество неактивных студентов в разрезе курсов:", calculate(students));

let allNoActive = 0;
for (var x in students) {
  if (students[x].active === false) {
    allNoActive++;
  }
}
console.log("Общее количество неактивных студентов:", allNoActive);
