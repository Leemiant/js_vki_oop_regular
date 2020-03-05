'use strict';
let sl = prompt("Введите целое число");
let reg = /^\s*?([- +])?\d+\s*$/;
if(sl.match(reg)){
    alert("Ввод верный")
    console.log(sl+" Верный");
}
else{
    alert("Ввод не верный")
    console.log(sl+" Не верный");
}
let sl1 = prompt("Введите вещественное число");
let reg1 = /^\s*?([- +])?([0-9]*\.[0-9]+)\s*$/;
if(sl1.match(reg1)){
    alert("Ввод верный")
    console.log(sl1+" Верный");
}
else{
    alert("Ввод не верный")
    console.log(sl1+" Не верный");
}
let ip = prompt("Введите ip");
let regip = /^\s*\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\s*$/;
if(ip.match(regip)){
    alert("Ввод верный")
    console.log(ip+" Верный");
}
else{
    alert("Не выерный воод ip")
    console.log(ip+" Не верный");
}
let number = prompt("Введите номер телефона");
let regn = /^\s*?(\+)?([- ()]?\d[- ()]?){11}\s*$/; //8 999 999 99 99 +7 (999) 999-99-99
if(number.match(regn)){
    alert("Ввод верный")
    console.log(number+" Верный");
}
else{
    alert("Не верно введен номер телефона")
    console.log(number+" Не верный");
}
let eml = prompt("Введите e-mail");
let regeml = /^\s*[-._a-z0-9]*@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}\s*$/; //zororomz@mail.ru zororomzma@il.ru
if(eml.match(regeml)){
    alert("Ввод верный")
    console.log(eml+" Верный");
}
else{
    alert("Не верно введен e-mail")
    console.log(eml+" Не верный");
}
// целое число ^\s*\d+\s*$/
// число повторений + одно и более 
// целое и вещественное + отрицательное ^\s*?([- +])?([0-9]*?(\.)?[0-9]+)\s*$
// * ноль и более
// (http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?
// +7 dddddddddd; -/^\s*\+(\1\D*){10}\s*$/
// 1.555; ^([0-9]*\.[0-9]+)$ 
// ?(\+)? ^(\s*)?(\+)?([- ()]?\d[- ()]?){10,14}(\s*)?$
// ^\s*[-._a-z0-9]*@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}\s*$ 
