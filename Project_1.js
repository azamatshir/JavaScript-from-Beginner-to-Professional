let val = prompt("Введите число до 100");
val = Number(val);
let num = Math.floor(Math.random() * 100);
let message = "nothing";
if (val > num) {
    message = val + "  was greater than " + num;
} else if (val === num) {
    message = val + "  was equal to " + num;
} else {
    message = val + " is less than " + num;
}
console.log(message);