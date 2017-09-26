import icons from "sass/_icon.sass";
import logoImg from "./logo.png";
import styles from "./drawer.sass";

const drawerElem = document.createElement("aside");
drawerElem.className = styles.drawer;

const logoElem = document.createElement("img");
logoElem.src = logoImg;
logoElem.width = 82;
logoElem.height = 85;
logoElem.className = styles.logo;

const titleText = `WELCOME TO NUPT`;
const titleElem = document.createElement("p");
titleElem.className = styles.text;
titleElem.innerText = titleText;

const iconMenu = document.createElement("i");
iconMenu.className = icons["icon-menu"];

drawerElem.appendChild(logoElem);
drawerElem.appendChild(titleElem);
drawerElem.appendChild(iconMenu);

export default drawerElem;
