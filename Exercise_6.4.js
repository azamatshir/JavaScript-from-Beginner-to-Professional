const arrRes = []; // массив для хранения результата 

function calc (a, b, op) {
    if (op == "-") {
        return a - b ;
    } else {
        return a + b;
    }
}

for (let i = 0; i < 10; i++) {
    let val1 = i * 5;
    let val2 = i * i;
    let res = calc(val1, val2, "+");
    arrRes.push(res);
}

console.log(arrRes);





