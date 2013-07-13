var clipName : String;

function Start()
{
    var clip = animation[clipName].clip;
 
    var destroy = new AnimationEvent();
    destroy.functionName = "DestroyBlocker";
    
}
 
function DestroyBlocker()
{
    Destroy(this.gameObject);
}