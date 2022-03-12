export default class Room {
    constructor(bgImage, enemies) {
        this.bgImage = bgImage;
        this.enemies = enemies;
        this.enemiesRemaining = true;
    }

    getEnemies() {
        return enemies;
    }

    getEnemy(enemy) {
        return enemies[enemy];
    }

    enemiesAlive() {
        const newEnemyArray = [];
        for(let i = 0; i < this.enemies.length; i++) {
            if(enemies[i].isAlive()) {
                newEnemyArray.push(enemies[i]);
            }
        }
         
        if(!newEnemyArray || newEnemyArray === undefined) {
            return false;
        } else {
            return newEnemyArray;
        }
    }
}