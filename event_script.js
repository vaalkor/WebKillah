const CLICK_KILLER = "enable_click_killer";
var click_killer_enabled = false;

chrome.commands.onCommand.addListener(function(command) {
        click_killer_enabled = !click_killer_enabled;
        console.log("Enable click killer pressed!!");
        chrome.tabs.query({active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: CLICK_KILLER}, function(response) {});  
        });
        console.log(command);
        console.log(command == CLICK_KILLER);
        console.log(command === CLICK_KILLER);
});