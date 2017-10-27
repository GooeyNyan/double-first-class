/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:15:47 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-26 22:20:16
 */

import styles from "./mainWrapper.sass";
import drawerElem from "../drawer/drawer";
import squaresElem from "../squares/squares";
import overviewElem from "../overview/overview";

const mainWrapper = document.createElement("main");
mainWrapper.className = styles.main;

mainWrapper.appendChild(drawerElem);

const main = document.createElement("div");
main.className = styles.mainWrapper;
main.appendChild(squaresElem);
main.appendChild(overviewElem);
mainWrapper.appendChild(main);
// particlesJS.load(mainWrapper, "./particles.json", () => {
//   console.log("callback - particles.js config loaded");
// });

export default mainWrapper;
