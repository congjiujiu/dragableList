function getIndex(node, pnode) {
    var nodes = pnode.children;
    for (var i = 0; i < nodes.length; ++i) {
        if (node == nodes[i]) {
            return i;
        }
    }
};

function getStyle(obj, style) {
    if (window.getComputedStyle) {
        //标准浏览器
        return getComputedStyle(obj, null)[style];
    } else {
        //针对IE8及IE8以下版本的浏览器
        return obj.currentStyle[style];
    }
};

document.body.onload = function() {
    var list = document.getElementsByClassName("dragableList")[0];

    list.addEventListener("mouseover", function(e) {
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            var li = e.target;
            if (getIndex(e.target, e.target.parentNode) == 6) {
                var index = getIndex(li, li.parentNode);
                li.previousElementSibling.style.borderBottom = "0px";
                li.style.borderTop = "1px solid #000";
                li.style.marginTop = index * 51 + 1 + "px";
            } else if (li != li.parentNode.firstElementChild) {
                var index = getIndex(li, li.parentNode);
                li.previousElementSibling.style.borderBottom = "0px";
                li.nextElementSibling.style.marginTop = 52 + "px";
                li.style.borderTop = "1px solid #000";
                li.style.marginTop = index * 51 + 1 + "px";
            } else {
                li.style.position = "relative";
                li.style.marginLeft = "0px";
                li.nextElementSibling.style.marginTop = "-4px";
            }
        }
    }, true);

    list.addEventListener("mouseout", function(e) {
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            var li = e.target;
            if (getIndex(e.target, e.target.parentNode) == 6) {
                li.previousElementSibling.style.borderBottom = "1px solid #000";
                li.style.borderTop = "0px";
                li.style.marginTop = "0px";
            } else if (li != li.parentNode.firstElementChild) {
                li.previousElementSibling.style.borderBottom = "1px solid #000";
                li.nextElementSibling.style.marginTop = "0px";
                li.style.borderTop = "0px";
                li.style.marginTop = "0px";
            } else {
                li.nextElementSibling.style.marginTop = "0px";
            }
        }
    }, true);

    list.addEventListener("mousedown", function(e){
        if (e.target && e.target.nodeName.toUpperCase()=="LI") {
            
        }
    }, true);

};
