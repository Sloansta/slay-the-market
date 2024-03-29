export default class Player {
  constructor(userName, maxHealth, currentHealth, cards) {
    this.userName = userName;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.cards = cards;
    this.alive = true;
  }

  isAlive() {
    if (this.currentHealth <= 0) {
      this.alive = false;
    }
  }

  // we are assuming here that the target is an enemy and card is a card being played
  attack(target, card) {
    target.currentHealth -= card.value;
  }

  useHeal(card) {
    this.maxHealth += card.value;
  }
}
