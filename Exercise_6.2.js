const dis = ["чудесный", "красивый", "суперский", "злой", "страшный"]; // массив описаний

function myFun () {
    const question = prompt("Введите ваше имя");
    const rand = Math.floor(Math.random() * dis.length); // число для индекса массива
    console.log(dis[rand] + " " + question); // вывод
}

myFun();

