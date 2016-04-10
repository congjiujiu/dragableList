//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//

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
    var dx = 0;
    var dy = 0;

    list.onmousedown = function(e){
        if (e.target && e.target.nodeName.toUpperCase()=="LI") {
            var li = e.target;
            var y = e.offsetY;
            var originTop = parseInt(getStyle(li, "top"));
            dy = y - originTop;
            document.onmousemove = function(e) {
                var y = e.offsetY;
                li.style.top = y - dy + 'px';
                console.log(li.style.top);
            };
            document.onmouseup = function(){
                //鼠标松开时，把mousemove等解除引用
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    };

    list.onmouseover =  function(e) {
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            var li = e.target;
            if (getIndex(li, li.parentNode) == 6) {
                var index = getIndex(li, li.parentNode);
                li.previousElementSibling.style.borderBottom = "0px";
                li.style.borderTop = "1px solid #000";
                li.style.marginTop = index * 51 + 1 + "px";
                li.style.top = "-2px";
                li.style.left = "-2px";
            } else if (li != li.parentNode.firstElementChild) {
                var index = getIndex(li, li.parentNode);
                li.previousElementSibling.style.borderBottom = "0px";
                li.nextElementSibling.style.marginTop = 52 + "px";
                li.style.borderTop = "1px solid #000";
                li.style.marginTop = index * 51 + 1 + "px";
                li.style.top = "-2px";
                li.style.left = "-2px";
            } else {
                li.style.position = "relative";
                li.style.marginLeft = "0px";
                li.nextElementSibling.style.marginTop = "-4px";
                li.style.top = "-2px";
                li.style.left = "-2px";
            }
        }
    };

    list.onmouseout = function(e) {
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            var li = e.target;
            if (getIndex(li, li.parentNode) == 6) {
                li.previousElementSibling.style.borderBottom = "1px solid #000";
                li.style.borderTop = "0px";
                li.style.marginTop = "0px";
                li.style.top = "0px";
                li.style.left = "0px";
            } else if (li != li.parentNode.firstElementChild) {
                li.previousElementSibling.style.borderBottom = "1px solid #000";
                li.nextElementSibling.style.marginTop = "0px";
                li.style.borderTop = "0px";
                li.style.marginTop = "0px";
                li.style.top = "0px";
                li.style.left = "0px";
            } else {
                li.nextElementSibling.style.marginTop = "0px";
                li.style.top = "0px";
                li.style.left = "0px";
            }
        }
    };
};
