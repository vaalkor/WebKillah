var currentElement = null;

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);

function onMouseDown(e)
{
    if(currentElement)
    {
        currentElement.remove();
        currentElement = null;
    }
        
}
function onMouseMove(e)
{
    var x = e.clientX;
    var y = e.clientY;
    var elem = document.elementFromPoint(x,y);
    if(elem && currentElement !== elem)
    {
        console.log(elem.outerHTML);
        if(currentElement) currentElement.classList.remove("delete-highlight");
        currentElement = elem;
        currentElement.classList.add("delete-highlight");

    }
}

console.log(`Alright mate!!!`);