let prize = prompt("Выберите число от 0 до 10");
prize = Number(prize);
let output = "Мой выбор: ";
switch(prize) {
    case 0:
        output += "Серебристый ";
    case 1:
        output += "IPhone ";
        break;
    case 2:
        output += "Белая ";
    case 3:
        output += "Большая ";
    case 4:
        output += "Машина";
        break;
    case 5:
        output += "Мешок ";
    case 6:
        output += "Монет";
        break;
    default:
        output = "Попробуйте снова";
}

console.log("Ваше число " + prize + " " + output);