// Посчитать количество ссылок на странице, вывести их содержимое

let links = document.links; 
console.log("Количество ссылок на странице:", links.length);

for (let i = 0; i < links.length; i++) {
  let item = links[i];
  console.log(item.getAttribute("href") + item.textContent);
};