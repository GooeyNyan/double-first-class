/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:16:05 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-26 23:36:51
 */

import icons from "sass/_icon.scss";
import logoImg from "./logo.png";
import styles from "./drawer.sass";

const drawerElem = document.createElement("aside");
drawerElem.className = styles.drawer;

const logoElem = document.createElement("img");
logoElem.src = logoImg;
logoElem.width = 82;
logoElem.height = 85;
logoElem.className = styles.logo;

const titleWrapper = document.createElement("div");
titleWrapper.className = styles.textWrapper;

const titleText = `WELCOME TO NUPT`;
const titleElem = document.createElement("p");
titleElem.className = styles.text;
titleElem.innerText = titleText;

const linkWrapper = document.createElement("div");
// 建设方案 综合实力  办学定位  建设目标  学科建设 人才培养 科学研究 社会服务  文化建设  师资队伍  国际合作  国际影响
const links = [
  {
    href: "#",
    text: "建设方案"
  },
  {
    href: "#",
    text: "综合实力"
  },
  {
    href: "#",
    text: "办学定位"
  },
  {
    href: "#",
    text: "建设目标"
  },
  {
    href: "#",
    text: "学科建设"
  },
  {
    href: "#",
    text: "人才培养"
  },
  {
    href: "#",
    text: "科学研究"
  },
  {
    href: "#",
    text: "社会服务"
  },
  {
    href: "#",
    text: "文化建设"
  },
  {
    href: "#",
    text: "师资队伍"
  },
  {
    href: "#",
    text: "国际合作"
  },
  {
    href: "#",
    text: "国际影响"
  }
];
const fragment = document.createDocumentFragment();

for (const link of links) {
  const div = document.createElement("div");
  const a = document.createElement("a");
  div.className = styles.navItem;
  a.className = styles.link;
  a.href = link.href;
  a.textContent = link.text;
  div.appendChild(a);
  fragment.appendChild(div);
}

titleWrapper.appendChild(titleElem);
titleWrapper.appendChild(fragment);

const iconMenu = document.createElement("i");
iconMenu.className = icons["icon-menu"];

const openDrawer = () => {
  drawerElem.classList.toggle(styles.open);
};

iconMenu.addEventListener("click", openDrawer);

drawerElem.appendChild(logoElem);
drawerElem.appendChild(titleWrapper);
drawerElem.appendChild(iconMenu);

export default drawerElem;
