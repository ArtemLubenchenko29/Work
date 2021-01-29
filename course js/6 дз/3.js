/* 
1. В задании из пятого урока, взять массив со студентами и вывести их на страницу согласно сверстанной HTML-структуре, рядом с каждым студентом вывести крестик - 
по нажатию на который студент будет удален (удаляется как со страницы, так и с объекта), если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
2. Вывести статистику средних оценок в разрезе курса и статистику по количеству неактивных студентов в разрезе каждого курса и общее количество неактивных студентов
3. Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса, оценки и checkbox для активности студента, по нажатии на кнопку “Добавить” - студент новый добавляется в список студентов
Задание из 7-го дз:
1. В ряде предыдущих заданий - выделять красным цветом тех студентов которые имеют оценку 3 и менее. которые от 3 до 4  - желтым и которые 4 и выше - зеленым.
*/

function Student(){
 this.students = [
  { name: "Ivan", estimate: 4, course: 1, active: true },
  { name: "Petr", estimate: 3, course: 1, active: false },
  { name: "Alex", estimate: 2, course: 4, active: false },
  { name: "Max", estimate: 5, course: 2, active: true },
  { name: "Anton", estimate: 2, course: 3, active: true },
  { name: "Roman", estimate: 3, course: 2, active: false },
  { name: "Vladimir", estimate: 2, course: 4, active: true },
  { name: "Oleg", estimate: 5, course: 3, active: true },
  { name: "Evgeniy", estimate: 5, course: 5, active: true },
  { name: "Pavel", estimate: 3, course: 5, active: true },
  { name: "Danil", estimate: 2, course: 3, active: true },
  { name: "Denis", estimate: 4, course: 4, active: false },
];
}

Student.prototype.render = function(){
let tbody = document.querySelector(".students tbody");
tbody.innerHTML = "";

let self = this;

for (i = 0; i < this.students.length; i++){

  let tr = document.createElement("TR");

  if(this.students[i].estimate < 4){
      tr.className = "bad";
  }else if(this.students[i].estimate == 4 ){
      tr.className = "ts";
  }else if(this.students[i].estimate > 4 ){
    tr.className = "good";
}
  let td = document.createElement("TD");
   td.innerHTML = this.students[i].name;
   tr.appendChild(td);

   td = document.createElement("TD");
   td.innerHTML = this.students[i].estimate;
   tr.appendChild(td);

   td = document.createElement("TD");
   td.innerHTML = this.students[i].course;
   tr.appendChild(td);

   td = document.createElement("TD");
   td.innerHTML = this.students[i].active;
   tr.appendChild(td);

   td = document.createElement("TD");
     td.innerHTML = "Удалить";
     td.addEventListener("click", (function(index) {
         return function(event){
          self.remove(index); 
          self.render();
        };
    })(i));
    tr.appendChild(td);
   tbody.appendChild(tr)
}
this.students.length || (tbody.innerHTML = "<tr><td colspan=5>Список студентов пуст</td></tr>");
};

Student.prototype.remove = function(index){
  let self = this;
  this.students.splice(index, 1);
  self.render();
};


Student.prototype.noActive = function(){
  let allNoActive = 0;
for (var x in this.students) {
  if (this.students[x].active === false) {
    allNoActive++;
  }
}
document.getElementById("notActive").innerHTML = allNoActive;
};

window.onload = function(){
  let student = new Student();

  let button = document.getElementById("add");

  button.addEventListener("click", function(event){
      let data = new FormData(event.target.closest("form"));
      student.add({
          name: data.get("first_name"),
          course: data.get("course"),
          estimate: data.get("estimate"),
          active: data.get("is_active") !== null
      });
  });
};

Student.prototype.add = function(student){
  let self = this;
    self.students.push(student);
    self.render();
};

let s = new Student();
s.render();
s.noActive();