if (window.document.documentElement.clientWidth < 450) {
  let currentHref = window.location.href;

  if (!(currentHref.includes("htm") || currentHref.includes("psp"))) {
    // if don't includes (htm|psp) means the href is index page, just add 'm' signal
    window.location.href = `${currentHref}mainm.htm`;
  } else {
    currentHref = currentHref.replace(/(.*).(htm|psp)/, "$1m.$2");
    window.location.href = currentHref;
  }
}

const iconMenu = document.getElementsByClassName("icon-menu")[0];
const drawer = document.getElementsByClassName("drawer")[0];

const openDrawer = () => {
  drawer.classList.toggle("open");
};

iconMenu.addEventListener("click", openDrawer);
