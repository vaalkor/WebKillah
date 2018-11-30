console.log("hello there...");

chrome.extension.isAllowedIncognitoAccess((isAllowed)=>console.log("I'm allowed mateio..."));

var i=0;
setInterval(()=>{
    i++;
    if(i%2)
        document.body.setAttribute('bgcolor', "#ff00ff");
    else
        document.body.setAttribute('bgcolor', "#00ff00");
},1000);