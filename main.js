searchMonitor = function(shippingId){
  var query = shippingId.selectionText;
  chrome.tabs.create({url: "https://shipping-bo.adminml.com/shipments/monitor/" + query});
};

chrome.contextMenus.create({
  title: "Search in Monitor",
  contexts:["selection"],
  onclick: searchMonitor
});