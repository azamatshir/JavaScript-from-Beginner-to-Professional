const one = () => console.log("one");
const two = () => console.log("two");

function three () {
    console.log("three");
    one();
    two();
}

let four = () => {
    console.log("four");
    setTimeout(one,0);
    three();
}

four();