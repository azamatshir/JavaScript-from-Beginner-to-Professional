// Вычислитель индекса массы тела (ИМТ)
// 1 дюйм равен 2.54 см;
// 2,2046 фунта равны 1 кг;
let inches = window.prompt("Введите значение роста в дюймах");
let pounds = window.prompt("Введите значение веса в фунтах");

let height = inches * 2.54; // рост в сантиметрах
let weight = pounds / 2.2046; // вес в килограммах
console.log("Рост в сантиметрах: " + height + " Вес в килограммах: " + weight);

let bmi = weight / (height/100 * height/100); // ИМТ
console.log("ИМТ: " + bmi);
