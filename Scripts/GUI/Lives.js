#pragma strict

function Start () {

}

function Update () {
	var fontText : exSpriteFont = GetComponent(exSpriteFont);
	
	fontText.text =  "" + player.Lives;
}