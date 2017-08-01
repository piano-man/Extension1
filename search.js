chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  // message.searchText is the text that was captured in the popup    
  // Search/Highlight code goes here
  console.log("in search.js")
  var elements = document.getElementsByTagName('*');
  var divs = document.getElementById(/substream/g);

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    //console.log(element.childNodes)

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            console.log(node.parentNode)
            var text = node.nodeValue;
            var find = message.searchText;
            var re = new RegExp(find, 'gi');
            var replacedText = text.replace(re, 'spoiler');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
});