#pragma strict

var enemyType : int;

var speed1 : float;
var speed2 : float;
var speed3 : float;

var yLimit : float;

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "playerBullet") {
		Destroy(this.gameObject);
		player.Score -= 100;
	}
}

function Start () {

}

function Update () {
	if (enemyType == 1) {
		Movement(1);
	}

	if (enemyType == 2) {
		Movement(2);
	}
	
	if (enemyType == 3) {
		Movement(3);
	}
	
	if (transform.position.y <= yLimit) {
		if (enemyType == 1) {
			player.Score += 300;
			player.Lives -= 300;
		}
		if (enemyType == 2) {
			player.Score += 200;
			player.Lives -= 200;
		}
		if (enemyType == 3) {
			player.Score += 100;
			player.Lives -= 100;
		}
		Destroy(gameObject);
	}
}

function Movement (selection : int) {
	if (selection == 1) {
		transform.position.y -= speed1;
	}
	
	if (selection == 2) {
		transform.position.y -= speed2;
	}
	
	if (selection == 3) {
		transform.position.y -= speed3;
	}	
}