class Person {
    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        return this.firstname + " " + this.lastname; 
    }
}

let person1 = new Person("Eduard", "Husaenov");
console.log(person1.fullname());