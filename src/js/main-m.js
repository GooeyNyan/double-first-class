if (window.document.documentElement.clientWidth >= 450) {
  let currentHref = window.location.href;

  currentHref = currentHref.split(/m.(psp|htm)/);
  window.location.href = `${currentHref[0]}.${currentHref[1]}`;
}

const iconMenu = document.getElementsByClassName("icon-menu")[0];
const drawer = document.getElementsByClassName("drawer")[0];

const openDrawer = () => {
  drawer.classList.toggle("open");
};

iconMenu.addEventListener("click", openDrawer);
