// ==UserScript==
// @name        UltraWideFix
// @namespace   uwf
// @description Fix aspect ratio for youtube.
// @include     https://www.youtube.com/watch=*
// @version     1
// @grant       none
// ==/UserScript==
document.addEventListener("keydown", OnKeyDownHandler, false);
//
function OnKeyDownHandler(e) {
  var keyCode = e.keyCode;
  alert("keyCode=" + keyCode);
}
