let elMenu = document.querySelectorAll('.menu-item');
//console.log(elMenu);
let menu = document.querySelector('.menu');
/////1 задание
menu.insertBefore(elMenu[2], elMenu[1]);
//let body = document.getElementsByTagName('body');
//console.log(body);
//document.body.style.backgroundImage = "url('../img/apple_true.jpg')";
//center no-repeat//

document.body.style.backgroundImage = "url('../Для ДЗ №5/img/apple_true.jpg')";

let tit = document.querySelector('.title');
tit.innerHTML = 'Мы продаем только подлинную технику Apple';

let trash = document.querySelector('.adv');
//let col = document.querySelectorAll('.column')
//let colcol = document.body.col[1];
//console.log(colcol);
///document.body.col[1].removeChild(trash);
trash.remove();

let answ = prompt('Ваше отношение к технике');
let prom = document.querySelector('.prompt');
prom.innerHTML = answ;
