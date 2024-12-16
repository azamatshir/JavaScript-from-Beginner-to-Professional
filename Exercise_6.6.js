function fibRecursive (nr) {
    console.log(nr)
    if (nr == 0) {
        return 1;
    } else {
        return nr * fibRecursive(-- nr);
    }

}

console.log(fibRecursive(7));
