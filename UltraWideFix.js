// ==UserScript==
// @name        UltraWideFix
// @namespace   uwf
// @description Fix aspect ratio for youtube.
// @include     https://www.youtube.com/watch=*
// @version     1
// @grant       none
// ==/UserScript==

//add css
var c=new document.createElement("style")
    .type("text/css")
    .innerHTML("uws { height:'133.9%'!important;" +
        "width:100%!important;" +
        "left:0%!important;" +
        "top:50%!important;" +
        "position:'relative'!important;" +
        "transform:translateY(-12.5%)!important;" +
        "}");
document.body.appendChild(c);

document.addEventListener("fullscreenchange", function(e) {
    //TODO:trigger script here

},false);
document.addEventListener("onKeyPress", function (e) {
    var kw = e.which;
    //99 in firefox is lctrl+lalt+c
    //do something
    if( 99 == kw
        && document.document.mozFullScreenEnabled
    ){
        if(-1 == document.getElementById('movie_player').className.indexOf("uws")){
            document.getElementById('movie_player').classList.add("uws");
        }else{
            document.getElementById('movie_player').classList.remove("uws");
        }
    }
}, false);


