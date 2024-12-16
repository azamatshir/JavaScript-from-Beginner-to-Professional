class Animal {
    constructor (sounds, species) {
        this.species = species;
        this.sounds = sounds;
    }

    tolk () {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.sleep = function () {
    console.log(this.species + " " + "Спит");
};

let tiger = new Animal("Рычит", "Тигр");
let horse = new Animal("Ржет", "Лошадь");

tiger.tolk();
tiger.sleep();
console.log(horse);

