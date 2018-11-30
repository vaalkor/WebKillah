const CLICK_KILLER = "enable_click_killer";
var currentElement = null;
var killer_enabled = false;

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if(message.action===CLICK_KILLER)
    {
        killer_enabled = !killer_enabled;
        if(currentElement) currentElement.classList.remove("delete-highlight");
        currentElement = null
    }
});

function onMouseDown(e)
{
    if(killer_enabled)
    {
        if(currentElement)
        {
            currentElement.remove();
            currentElement = null;
        }
    }
}
function onMouseMove(e)
{
    if(killer_enabled)
    {
        var x = e.clientX;
        var y = e.clientY;
        var elem = document.elementFromPoint(x,y);
        if(elem && currentElement !== elem)
        {
            //console.log(elem.outerHTML);
            if(currentElement) currentElement.classList.remove("delete-highlight");
            currentElement = elem;
            currentElement.classList.add("delete-highlight");
    
        }
    }
    
}