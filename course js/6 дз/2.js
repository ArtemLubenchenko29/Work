// Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое

var tag = document.querySelectorAll('p.phrase').length
console.log("Количество тегов p с классом phrase на странице:", tag);

var tags = document.querySelectorAll('p.phrase'); 
for (var i = 0; i < tags.length; i++)
{
    console.log(tags[i].innerHTML);
};