#pragma strict

var title : String;
var posx : int;
var posy : int;
var width : int;
var length : int;
private var showInstructions : boolean = false;

function OnGUI () {
	GUI.Box (Rect (posx, posy, width, length+10), title);

	if (GUI.Button (Rect (posx,posy+40,width,length), "Play")) {
		Application.LoadLevel("Play");
	}

	if (GUI.Button (Rect (posx,posy+80,width,length), "Instructions")) {
		showInstructions = true;
	}
	
	if (GUI.Button (Rect (posx,posy+120,width,length), "dCoye.com")) {
		Application.OpenURL("http://dcoye.com/");
	}
	
	if (showInstructions) {
		GUI.Box (Rect (posx-100, posy+190, width+180, length+100), 
		"Top left corner = Earth's population.\n Top right = Score. Don't let population reach 10k.\n"
		+"Each food that reaches Earth adds population\n to Earth, while each enemy decreases\n the population.\n"
		+"Good Luck!");
	}
}
