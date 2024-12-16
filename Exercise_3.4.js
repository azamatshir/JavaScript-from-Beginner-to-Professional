const myCar = {
    make: "Toyota",
    model: "Carolla",
    tires: 4,
    doors: 4,
    color: "white",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "blue";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);

