#pragma strict

var foodType : int;

var speed1 : float;
var speed2 : float;
var speed3 : float;

var yLimit : float;

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "playerBullet") {
		Destroy(this.gameObject);
	}	
}

function Start () {

}

function Update () {
	if (foodType == 1) {
		Movement(1);
	}

	if (foodType == 2) {
		Movement(2);
	}
	
	if (foodType == 3) {
		Movement(3);
	}
	
	if (transform.position.y <= yLimit) {
		if (foodType == 1) {
			player.Lives += 300;
		}
		if (foodType == 2) {
			player.Lives += 200;
		}
		if (foodType == 3) {
			player.Lives += 100;
		}
		Destroy(this.gameObject);
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