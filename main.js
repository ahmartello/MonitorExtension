searchMonitor = function(shippingId){
  var query = shippingId.selectionText;

  shipping_id_array = query.split(" ") 

  for (shipping_id of shipping_id_array){
    chrome.tabs.create({url: "https://shipping-bo.adminml.com/shipments/monitor/" + shipping_id});
  }
};

chrome.contextMenus.create({
  title: "Search in Monitor",
  contexts:["selection"],
  onclick: searchMonitor
});