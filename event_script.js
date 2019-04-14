const CLICK_KILLER = "enable_click_killer";
var click_killer_enabled = false;

chrome.commands.onCommand.addListener(function(command) {
        click_killer_enabled = !click_killer_enabled;
        chrome.tabs.query({active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: CLICK_KILLER}, function(response) {});  
        });
});