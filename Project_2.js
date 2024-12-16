class Menu {
    #offer1 = 20;
    #offer2 = 30;
    constructor (val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }

    calc() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }

    get total() {
        return this.calc();
    }
 }

 const val1 = new Menu(2,4);
 const val2 = new Menu(5,3);
const val3 = new Menu(7,8);

console.log(val1.total);
console.log(val2.total);
console.log(val3.total);