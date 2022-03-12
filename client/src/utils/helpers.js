export function reduceHealth(health, dmg) {
    return health -= dmg;
};

export function gainHealth(health) {
    health += 20;

    if (health >= maxHealth) {
        health = maxHealth;
    }

    return health;
};

export function isAlive(health, isAlive) {
    if (health <= 0) {
        isAlive = false;
    }

    isAlive = true;
};

