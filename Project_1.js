class Employee {
    constructor (firstname, lastname, experience) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.experience = experience;
    }
}

Employee.prototype.details = function () {
    return this.firstname + " " + this.lastname + " отработанно лет: " + this.experience;
}

const person1 = new Employee("Иван", "Иванов", 2);
const person2 = new Employee("Андрей", "Тэйт", 4);
const workers = [person1, person2];

workers.forEach((person) => {
    console.log(person.details());
}); 

