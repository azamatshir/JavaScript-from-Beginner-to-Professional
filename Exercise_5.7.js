const carObj = {
    model: "Carolla",
    make: "Toyota",
    year: "2014"
}

for (let prop in carObj) {
    console.log(prop, carObj[prop]);
}

const carArr = ["Carolla", "Toyota", "2014"];

for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
}