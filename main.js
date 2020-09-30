searchMonitor = function(selectedText){
  searchWithURL(selectedText, "https://envios.adminml.com/network/monitor/")
};

searchRSMonitor = function(selectedText){
  searchWithURL(selectedText, "https://envios.adminml.com/network/monitor-route-selector/")
};

searchWithURL = function(selectedText, monitorUrl){
  var rawValues = selectedText.selectionText;

  shippingIdRegex = /([0-9]{11})/;

  for (possibleShippingId of rawValues.split(shippingIdRegex)){
    if (shippingIdRegex.test(possibleShippingId)){
      chrome.tabs.create({url: monitorUrl + possibleShippingId});
    }
  }
};

searchBoth = function(selectedText){
  searchMonitor(selectedText)
  searchRSMonitor(selectedText)
};

chrome.contextMenus.create({
  title: "SS Monitor",
  contexts:["selection"],
  onclick: searchMonitor
});

chrome.contextMenus.create({
  title: "RS Monitor",
  contexts:["selection"],
  onclick: searchRSMonitor
});

chrome.contextMenus.create({
  title: "RS and SS Monitor",
  contexts:["selection"],
  onclick: searchBoth
});