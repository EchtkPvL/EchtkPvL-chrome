/**
 * background.js
 *
 *
 * @author    EchtkPvL
 * @copyright 19.11.2018 EchtkPvL
 */

chrome.contextMenus.create({
  id: "undo",
  title: "URL wiederherstellen",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if(info.menuItemId == "undo"){
    restore(tab);
  }
});

function restore(tab){
/*
  chrome.storage.local.get(['https://www.amazon.de/dp/B008J7D72Y/'], function(result) {
    console.log('Value currently is ' + result.key);
  });
*/
  alert(tab.url);
}

// EOF
