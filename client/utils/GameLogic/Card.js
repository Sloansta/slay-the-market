export default class Card {
    constructor(name, description, cardClass, value) {
        this.name = name;
        this.description = description;
        this.cardClass = cardClass;
        this.value = value;
    }

    upgradeCard(valueIncrease) {
        this.vale += valueIncrease;
    }
}