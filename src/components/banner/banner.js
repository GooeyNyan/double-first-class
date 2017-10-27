/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:15:57 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-26 21:48:26
 */

import bannerImg from "./banner.png";
import styles from "./banner.sass";

const bannerElem = document.createElement(`div`);
bannerElem.className = styles.banner;
bannerElem.innerHTML = `<img src=${bannerImg} alt="南京邮电大学一流学科建设" class=${styles.img}>`;

export default bannerElem;
