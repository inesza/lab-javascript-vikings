// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let attackingViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackedSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackResult = attackedSaxon.receiveDamage(attackingViking.strength);
    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxon, 1);
    }
    return attackResult;
  }
  saxonAttack() {
    let attackingSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackedViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackResult = attackedViking.receiveDamage(attackingSaxon.strength);
    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedViking, 1);
    }
    return attackResult;
  }
  attack(attacker, attacked) {
    let fighter = attacker[Math.floor(Math.random() * attacker.length)];
    let defender = attacked[Math.floor(Math.random() * attacked.length)];

    let attackResult = defender.receiveDamage(fighter.strength);
    if (defender.health <= 0) {
      attacked.splice(defender, 1);
    }
    return attackResult;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

const war = new War();

// Create vikings and saxons of random health and strength
for (let i = 0; i < 6; i++) {
  war.addSaxon(
    new Saxon(
      Math.floor(Math.random() * (100 - 30) + 30),
      Math.floor(Math.random() * (15 - 5) + 5)
    )
  );
  war.addViking(
    new Viking(
      "Hildur",
      Math.floor(Math.random() * (200 - 120) + 120),
      Math.floor(Math.random() * (40 - 10) + 10)
    )
  );
}
