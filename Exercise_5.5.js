const grid = []; // сетка
const cells = 64; // число ячеек
let counter = 0;   // счетчик
let row;

console.log()

for (let x = 0; x < cells + 1; x++) {
    if ( counter % 8 == 0) {
        if (row != undefined) {
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
}
console.table(grid);