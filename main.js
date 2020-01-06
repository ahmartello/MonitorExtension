searchMonitor = function(shippingId){
  var query = shippingId.selectionText;

  //TODO: validate if the string is a shipping id. skip the ones that aren't
  //so we can select a big text and run the command on it, without worring.
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