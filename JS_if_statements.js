let mana = 40;

if (mana === 0) {
    console.log("Out of mana");
} else if (mana >= 30) {
    console.log("Wizard casts Fireball.");
} else {
    console.log("Not enough mana");
}

let stamina = 25;
let ap = 8;

if (ap >= 10 && stamina > 0 && stamina < 20) {
    console.log("Not enough stamina");
} else if (stamina >= 20 && ap > 0 && ap < 10) {
    console.log("Not enough ap");
} else {
    console.log("Gensk uses Power Slash!");
}

let rank = "Gold";
let hasArenaPass = false;

if (rank === "Gold" || hasArenaPass === true) {
    console.log("Gensk may enter the arena.");
}