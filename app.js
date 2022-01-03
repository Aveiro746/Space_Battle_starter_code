// SPACE BATTLE JS GAME !
// Battle the aliens as you try to destroy them with your lasers. 
// There are six alien ships.
// The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship
// You have the initiative and get to attack first
// can only attack the aliens in order.
// After you have destroyed a ship, you have the option to make a hasty retreat.

// GAME ROUND
// You attack the first alien ship 
// - If the ship survives, it attacks you - 
    // If you survive, you attack the ship again -
        // // If it survives, it attacks you again etc..
// If you destroy the ship, you have the option to **attack** the next ship or to **retreat** 
            // If you retreat, the game is over

// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed

// USS Schwarzenegger Properties
/*
*HULL* is the same as health. If hull reaches `0` or less, the ship is destroyed.

*FIREPOWER* is the amount of damage done to the **hull** of the target with a successful hit.

** accuracy** is the chance between 0 and 1 that the ship will hit its target.
Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()`. If output is greater than ** accuracy** then attack has missed,
If output is less than OR equal to ** accuracy** than attack will succeed.
*/

/* The USS Schwarzenegger should have the following properties:
 
hull - 20
firepower -5
accuracy - .7 
*/

/* The alien ships should each have the following ranged properties determined randomly:

 hull - between 3 and 6
firepower - between 2 and 4 
accuracy - between .6 and .8
*/

let i=0

// SHIP CLASS  
class Ship {
    constructor(name , hull ,firepower , accuracy ){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    // accuracy check + decrease hull based on enemy firepower
    attack(target) {
        if ( Math.random() <= this.accuracy) {
            return console.log("Hit!");
            target.hull -= this.firepower;

        } else {
            return console.log("Miss!");
        } 
    }
}
// PLAYER SHIP OBJ
const playerShip = new Ship("USS Schwarzenegger" , 20 , .5 , .7)


// Randomizing the Alien Ships , hull , firepower , accuracy
// this.hull = Math.floor(Math.random() * 4) + 3
// this.firepower = Math.floor(Math.random() * 3) + 2;
// this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10

// // Creating For loop for creating  6 alien ships
const alienShipsArr = [];
for(let i = 0; i < 6; i++) {
  const newAlienShip = new Ship('Alien_Ship' , Math.floor(Math.random() * 4) + 3 , Math.floor(Math.random() * 3) + 2 ,(Math.floor(Math.random() * 3) + 6) / 10);
  alienShipsArr.push(newAlienShip);
}


//

//Play Game Function
function playgame() {
    alert("Game Start!")
    playerShip.attack(alienShipsArr[i])

}


playBtn.addEventListener("click", playgame)