let num = 1000;

(function () {
    num = 2000;
    console.log(num);
}) ();

let result = (function () {
    num = 3000;
    return num;
})();

console.log(result);
console.log(num);

(function (num) {
    console.log(`My value is ${num}`);  
})(5000);

