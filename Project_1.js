const tableMy = [];
const num = 15;

for (let x = 0; x < num; x++) {
    let temp = [];
    for (let y = 0; y < num; y++) {
        temp.push(x * y);
    }
    tableMy.push(temp);
}

console.table(tableMy);