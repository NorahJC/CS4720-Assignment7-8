window.onload = function () {
    var bodyNodes = document.getElementsByTagName("*");
    for (var i = 0; i < bodyNodes.length; i++) {
        if (bodyNodes[i].nodeType != 3) {
            newChildNode = document.createElement("p");
            newChildNode.className = "hoverNode";
            newChildNode.innerHTML = bodyNodes[i].tagName;
            bodyNodes[i].appendChild(newChildNode);
            newChildNode.addEventListener("click", function () {
                alert("Tag Name: " + newChildNode.tagName + "  innerHtml: " + newChildNode.innerHTML);
            });

        }

        i++;
    }
};