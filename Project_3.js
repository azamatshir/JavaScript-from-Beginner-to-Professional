// Игра "Камень - ножницы - бумага"
const myArr = ["Камень", "Бумага", "Ножницы"];
let player = prompt("Введите предмет"); // игрок выбирает предмет
let computer = Math.floor(Math.random() * 3); // случаное число от 0 до 2
let findIndex= myArr.indexOf(player); // вернет индекс введеного значения игроком
console.log(findIndex);
let message = "Игрок " + myArr[findIndex] + " vs Компьютер " + myArr[computer] + " ";

// Проверяем по индексу
if (findIndex === computer) {
    message += "это ничья";
} else if (findIndex > computer){
    if (computer == 0 && findIndex == 2) {
        message += "Компьютер победил";
    } else {
        message += "Игрок победил";
    }
} else {
    if (computer == 2 && findIndex == 0) {
        message += "Игрок победил";
    } else {
        message += "Компьютер победил";
    }
}
console.log(message);
