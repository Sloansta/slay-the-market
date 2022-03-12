export default class Enemy {
    constructor(name, currentHealth, maxHealth, img) {
        this.name = name;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.alive = true;

        this.intents = {
            attackMin: 1,
            attackMax: randomVal(2, 10),
            blockMin: 1,
            blockMax: randomVal(2, 10)
        };

        this.img = img; // this is whatever img we are using for the enemy
    }

    // here we are assuming that the target has a health property
    attack(target) {
        target.currentHealth -= randomVal(this.intents.attackMin, this.intents.attackMax);
    }

    block(dmg) {
        dmg -= randomVal(this.intents.blockMin, this.intents.blockMax);
        this.currentHealth -= dmg;
    }

    isAlive() {
        if(this.currentHealth <= 0) {
            this.alive = false;
        }
    }

    getHealth() {
        return this.currentHealth;
    }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (min-max)) + min;
}