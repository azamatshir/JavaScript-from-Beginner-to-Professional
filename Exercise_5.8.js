let output = "";
let skip = 5;

for (let i = 0; i < 10; i++) {
    if (i === skip) {
        continue;
    }
    output += i;
}

console.log(output);
