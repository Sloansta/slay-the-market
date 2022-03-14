export function reduceHealth(health, dmg) {
    return health -= dmg;
};

export function gainHealth(health, maxHealth) {
    health += 20;

    if (health >= maxHealth) {
        health = maxHealth;
    }

    return health;
};

export function isAlive(health) {
    let isAlive;
    if (health <= 0) {
        isAlive = false;
    }

    isAlive = true;

    return isAlive;
};

export function enemyRemains(enemies) {
    const newEnemyArray = [];
    for(let i = 0; i < enemies.length; i++) {
        if(isAlive(enemies[i].health)) {
            newEnemyArray.push(enemies[i]);
        }
    }

    if(newEnemyArray.length < 0)
        return false;
    else 
        return true;
};

export function useBlock(health, dmg, range) {
    dmg -= randomVal(0, range);
    health -= dmg;

    return health;
}


function randomVal(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
}