chrome.runtime.onMessage.addListener((message, sender) => {
    chrome.action.setPopup({ tabId: sender.tab.id, popup: "popup.html" });
  
    chrome.storage.local.set({ hex: message.hex, rgba: message.rgba });
});
  
