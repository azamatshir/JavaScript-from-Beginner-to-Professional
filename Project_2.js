// Игра Проверь друга
let person = prompt("Введите имя");
let message;
switch(person) {
    case "Азамат":
    case "Рустам":
    case "Эдуард":
    case "Андрей":    
        message = person + " мой друг";
        break;
    default:
        message = "Я не знаю " + person;
}
console.log(message);