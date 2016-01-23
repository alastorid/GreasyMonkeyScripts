// ==UserScript==
// @name        UltraWideFix
// @namespace   uwf
// @description Fix aspect ratio for youtube.
// @include     https://www.youtube.com/watch=*
// @version     1
// @grant       none
// ==/UserScript==
document.addEventListener("onKeyPress", onKeyPressHandler, false);

function onKeyPressHandler(e) {
    var kw = e.which;
    //99 in firefox is lctrl+lalt+c
    //do something


}
