#pragma strict

var xLimitLeft : float;
var xLimitRight : float;
var moveSpeed : float;

var foodSpawnSpeed : float;
var enemySpawnSpeed : float;


var food1 : Transform;
var food2 : Transform;
var food3 : Transform;

var enemy1 : Transform;
var enemy2 : Transform;
var enemy3 : Transform;

private var foodSpawning : boolean = false;
private var enemySpawning : boolean = false;


function Start () {

}
	
function Update () {
	spawnFood(); 
	spawnEnemies();
 	transform.position.x += moveSpeed;
	if (transform.position.x >= xLimitRight) {
		transform.position.x = xLimitLeft;
 	}
	 
 	if (player.Lives >= 500 && player.Lives <= 1500) {
	 	foodSpawnSpeed = 3;
		enemySpawnSpeed = 6;
	}
	
  	if (player.Lives > 1500 && player.Lives <= 3000) {
	 	foodSpawnSpeed = 2;
		enemySpawnSpeed = 2;
	}    
	
  	if (player.Lives > 3000 && player.Lives <= 5000) {
	 	foodSpawnSpeed = 2.5;
		enemySpawnSpeed = 0.5; 
	}  
	
  	if (player.Lives > 5000 && player.Lives <= 7500) {
	 	foodSpawnSpeed = 2;
		enemySpawnSpeed = 2;
	}  
	
  	if (player.Lives > 7500 && player.Lives <= 9999) {
 		foodSpawnSpeed = 3;
		enemySpawnSpeed = 6;
	} 
}

function spawnFood () { 
	var cloneFood : Transform; 
	var rollAmt = Random.Range(0,16); 
	
	if(!foodSpawning) { 
		foodSpawning = true;
    	yield (foodSpawnSpeed);
		if (rollAmt >= 0 && rollAmt <= 2) {
			cloneFood = Instantiate (food1,transform.position, transform.rotation); 
		}
		
		if (rollAmt > 2 && rollAmt <= 8) {
			cloneFood = Instantiate (food2,transform.position, transform.rotation); 
		}
		
		if (rollAmt > 8 && rollAmt <= 16) {
		 	cloneFood = Instantiate (food3,transform.position, transform.rotation); 
		} 
		yield WaitForSeconds(1);
		foodSpawning = false;
    } 
}

function spawnEnemies () {
	var cloneEnemy : Transform; 
	var rollAmt = Random.Range(0,16);
	 
	if (!enemySpawning) { 
		enemySpawning = true;
		yield(1);
		if (rollAmt >= 0 && rollAmt <= 2) {
		cloneEnemy = Instantiate (enemy3,this.transform.position, transform.rotation); 
		}
		
		if (rollAmt > 2 && rollAmt <= 8) {
			cloneEnemy = Instantiate (enemy2,this.transform.position, transform.rotation); 
		}
		
		if (rollAmt > 8 && rollAmt <= 16) {
			cloneEnemy = Instantiate (enemy1,this.transform.position, transform.rotation); 
		} 
		yield WaitForSeconds(enemySpawnSpeed);
		enemySpawning = false;
	} 

}