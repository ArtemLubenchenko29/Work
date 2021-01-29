// Переменная содержит в себе строку. Вывести строку в обратном порядке.
var str = "JavaScript"
var newString = "";
for (var i = str.length - 1; i >= 0; i--){
    newString += str[i]
}
console.log(newString)