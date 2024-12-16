const randomNumber = Math.floor(Math.random() * 6); // случайное число от 0 до 5
let answer = "Что то пошло не так"; // Ответ пользователю 
let question = prompt("Спроси о чем нибудь"); 
switch(randomNumber) {
    case 0:
        answer = "Возможно, но не точно";
        break;
    case 1:
        answer = "Вероятно";
        break;
    case 2:
        answer = "Большая вероятность";
        break;
    case 3:
        answer = "Это произойдет"
        break;
    case 4:
        answer = "Невозможно";
        break;
    case 5:
        answer = "Тебе повезет"
        break;
    default:
        answer = "Не могу сказать";
}       

let output = "Вы спросили меня " + question + ". Я думаю что " + answer;
console.log(output);