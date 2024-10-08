class Ninja {
    constructor(name, health = 90) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);  
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }

    showStats() {
        super.showStats();
        console.log(`Wisdom:  ${this.wisdom}`);
        return this;
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.sayName().showStats().speakWisdom().showStats();
