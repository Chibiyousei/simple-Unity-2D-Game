#pragma strict
static var Lives : int;
static var Score : int;

var leftSpawn : Vector3;
var rightSpawn : Vector3;
var moveSpeed : float; 

var bullet1 : Rigidbody;
var bullet2 : Rigidbody; 

private var exAnim : exSpriteAnimation;
exAnim = GetComponent(exSpriteAnimation);

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "rightBoundary") {
		this.transform.position = leftSpawn;
	} 
	if (other.gameObject.tag == "leftBoundary") {
		this.transform.position = rightSpawn;
	}
}

function Start () {
	Default();
}

function Update () { 
	if (Input.GetAxis("Vertical") > 0) {
		this.transform.position.y += moveSpeed  * Time.deltaTime;  
		if (!exAnim.IsPlaying("playerMovement")) {
			 exAnim.Play("playerMovement");
		}
	}
	
	if (Input.GetAxis("Vertical") < 0) {
		this.transform.position.y -= moveSpeed  * Time.deltaTime; 
		if (!exAnim.IsPlaying("playerMovement")) {
			 exAnim.Play("playerMovement");
		}
	}
	
	if (this.transform.position.y > rightSpawn.y) {
		 this.transform.position.y = rightSpawn.y;
	} 
	
	if (this.transform.position.y < leftSpawn.y ) { 
		 this.transform.position.y = leftSpawn.y;
	}	 
	
	if (transform.position.x < 0 && Input.GetButtonDown("Jump")) {
		Shoot(1);
	} 
	
	if (transform.position.x > 0 && Input.GetButtonDown("Jump")) {
		Shoot(2);
	} 
	
	if (Lives >= 10000) {
		Lives = 10000;
	}
	
	if (Lives <= 2) {
		Lives = 2;
	}
	 
	if (Score <= 0) {
		Score = 0;
	}  
	
	Lives += 100 * Time.deltaTime;
}
 
function Shoot (selection : int) {
 	var cloneBullet : Rigidbody;
	if (selection == 1) {	
		cloneBullet = Instantiate(bullet1, transform.position, transform.rotation);
	} 
	
	if (selection == 2) {	
		cloneBullet = Instantiate(bullet2, transform.position, transform.rotation);
	}

}

function Default () {
	Lives = 2;
	Score = 0;
}

function Lose() {
	yield WaitForSeconds(1);
	Default();
	Application.LoadLevel("Main_Menu");
}