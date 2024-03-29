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

export function generateRoundData(player, cards, rooms) {
    if(player.cards.length == 0) {
        for(let i = 0; i < 10; i++) {
            player.cards.push(cards[0, randomVal(1, cards.length)]);
        }
    }
    
    let selectedRooms = [];

    for(let i = 0; i < 3; i++) {
        selectedRooms.push(rooms[randomVal(0, rooms.length)]);
    }

    let roundInfo = {
        playerInfo: player,
        cardInfo: player.cards,
        roomInfo: selectedRooms
    };

    return roundInfo;
}


export function randomVal(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
}