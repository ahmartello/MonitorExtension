searchMonitor = function(selectedText){
  var rawValues = selectedText.selectionText;

  shippingIdRegex = /([0-9]{11})/;

  for (possibleShippingId of rawValues.split(shippingIdRegex)){
    if (shippingIdRegex.test(possibleShippingId)){
      chrome.tabs.create({url: "https://shipping-bo.adminml.com/shipments/monitor/" + possibleShippingId});
    }
  }
};

chrome.contextMenus.create({
  title: "Search in Monitor",
  contexts:["selection"],
  onclick: searchMonitor
});