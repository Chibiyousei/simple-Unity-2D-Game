#pragma strict
var bulletSpeed : int;
var limit : float;


function OnTriggerEnter (other : Collider) {
	if ( other.gameObject.tag == "Enemy") {
		Explode();
	}
}


function Update () {
	var amtToMove : int;
	amtToMove = bulletSpeed * Time.deltaTime;
	
	transform.Translate(Vector3.right * amtToMove);
	
	if ( transform.position.x >= limit ) {
		Destroy(this.gameObject);
	}  
}

function Explode () {
	Destroy(gameObject);
}

	
