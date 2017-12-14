"use strict";

if (window.document.documentElement.clientWidth >= 450) {
  var currentHref = window.location.href;

  currentHref = currentHref.split(/m.(psp|htm)/);
  window.location.href = currentHref[0] + "." + currentHref[1];
}

var iconMenu = document.getElementsByClassName("icon-menu")[0];
var drawer = document.getElementsByClassName("drawer")[0];

var openDrawer = function openDrawer() {
  drawer.classList.toggle("open");
};

iconMenu.addEventListener("click", openDrawer);