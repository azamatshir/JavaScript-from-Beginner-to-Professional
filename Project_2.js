const inventory = []; // основной массив каталога продукции
const item1 = {
    name: 'computer',
    model: 'Acer',
    cost: 50,
    qty: 2
};

const item2 = {
    name: 'laptop',
    model: 'MacBook',
    cost: 100,
    qty: 5
};

const item3 = {
    name: 'phone',
    model: 'samsung',
    cost: '70',
    qty: 15
}

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[1].qty);

