// Игра угадай число
const max = 6; // максимальное значение 
let ranNumber = Math.floor(Math.random() * max ) + 1 // угадываемое число
let correct = false;

while (!correct) {
    let guess = prompt("Угадайте число от 1 до " + max);
    guess = Number(guess);
    if (ranNumber === guess) {
        correct = true;
        console.log("Вы угадали!");
    } else if (guess > ranNumber) {
        console.log("Ваше число больше");
    } else {
        console.log("Ваше число меньше");
    }
}
