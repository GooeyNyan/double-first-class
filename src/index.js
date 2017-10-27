/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:16:10 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-27 14:55:00
 */
import "sass/normalize.scss";
import "sass/base.sass";
import bannerElem from "./components/banner/banner";
import mainWrapper from "./components/mainWrapper/mainWrapper";
import footer from "./components/footer/footer";

const root = document.getElementById(`root`);

const header = document.getElementById("header");
header.appendChild(bannerElem);

root.appendChild(mainWrapper);
root.appendChild(footer);
