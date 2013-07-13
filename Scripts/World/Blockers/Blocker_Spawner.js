#pragma strict

var time1 : float;
var time2 : float;
var time3 : float;
var time4 : float;
var time5 : float;

var Blocker1 : Transform;
var Blocker2 : Transform;
var Blocker3 : Transform;
var Blocker4 : Transform;
var Blocker5 : Transform;

private var spawned : boolean = false;
private var spawnReset : boolean = false;
var gameTimer : float = 0.0;

function Start () {

}
	
function Update () {
	gameTimer += Time.deltaTime;
	if (!spawned) {
		if (gameTimer >= time1 && gameTimer <= time1+1) 
			spawnBlocker(1);
		if (gameTimer >= time2 && gameTimer <= time2+1) 
			spawnBlocker(2);
		if (gameTimer >= time3 && gameTimer <= time3+1) 
			spawnBlocker(3);
		if (gameTimer >= time4 && gameTimer <= time4+1) 
			spawnBlocker(4);
		if (gameTimer >= time5 && gameTimer <= time5+1) 
			spawnBlocker(5);	
	}
}

function spawnBlocker (selection : int) {
	var cloneBlocker : Transform; 
	
	if (selection == 1 && !spawned) {
		cloneBlocker = Instantiate (Blocker1,transform.position, transform.rotation);
		spawned = true; 
		yield WaitForSeconds(4);
		spawned = false;
	}
	
	if (selection == 2 && !spawned) {
		cloneBlocker = Instantiate (Blocker2,transform.position, transform.rotation);
		spawned = true; 
		yield WaitForSeconds(4);
		spawned = false; 
	}
	
	if (selection == 3 && !spawned) {
	 	cloneBlocker = Instantiate (Blocker3,transform.position, transform.rotation);
 		spawned = true; 
		yield WaitForSeconds(4);
		spawned = false; 
	}
	if (selection == 4 && !spawned) {
	 	cloneBlocker = Instantiate (Blocker4,transform.position, transform.rotation);
 		spawned = true; 
		yield WaitForSeconds(4);
		spawned = false; 
	}
	if (selection == 5 && !spawned) {
	 	cloneBlocker = Instantiate (Blocker5,transform.position, transform.rotation); 
 		spawned = true; 
		yield WaitForSeconds(4);
		spawned = false;
		spawnReset = true;
		yield WaitForSeconds(1);
		spawnReset = false;
		gameTimer = 0;
	}
}