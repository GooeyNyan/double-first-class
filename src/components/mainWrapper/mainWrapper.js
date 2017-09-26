import styles from "./mainWrapper.sass";
import drawerElem from "../drawer/drawer";
import squaresElem from "../squares/squares";
import overviewElem from "../overview/overview";

const mainWrapper = document.createElement("main");
mainWrapper.className = styles.main;

mainWrapper.appendChild(drawerElem);
mainWrapper.appendChild(squaresElem);
mainWrapper.appendChild(overviewElem);
// particlesJS.load(mainWrapper, "./particles.json", () => {
//   console.log("callback - particles.js config loaded");
// });

export default mainWrapper;
