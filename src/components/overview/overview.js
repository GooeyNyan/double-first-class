/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:16:20 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-27 13:23:32
 */

import styles from "./overview.sass";
import njupt from "./njupt.jpg";

const wrapper = document.createElement("div");
wrapper.className = styles.overview;

// 标题
const titleWrapper = document.createElement("div");
titleWrapper.className = styles.titleWrapper;

const title = document.createElement("h2");
title.textContent = "校园概况";
title.className = styles.title;

const line1 = document.createElement("div");
const line2 = document.createElement("div");
line1.className = styles.line;
line2.className = styles.line;

titleWrapper.appendChild(line1);
titleWrapper.appendChild(title);
titleWrapper.appendChild(line2);

wrapper.appendChild(titleWrapper);

// 下部内容
const contentWrapper = document.createElement("div");
contentWrapper.className = styles.contentWrapper;
const imgWrapper = document.createElement("div");
imgWrapper.className = styles.imgWrapper;
const njuptImg = document.createElement("img");
njuptImg.src = njupt;
njuptImg.className = styles.img;
const imgBorder = document.createElement("div");
imgBorder.className = styles.imgBorder;

const contents = document.createElement("div");
contents.className = styles.contents;

class Content {
  constructor(params) {
    this.color = params.color;
    this.texts = params.text;
  }

  render() {
    const elWrapper = document.createElement("div");
    elWrapper.className = styles.contentItem;
    const round = document.createElement("div");
    round.style.background = this.color;
    round.className = styles.round;

    const textWrapper = document.createElement("div");
    textWrapper.className = styles.textWrapper;
    const fragment = document.createDocumentFragment();
    for (const text of this.texts) {
      const p = document.createElement("p");
      p.textContent = text;
      fragment.appendChild(p);
    }
    textWrapper.appendChild(fragment);
    elWrapper.appendChild(round);
    elWrapper.appendChild(textWrapper);
    return elWrapper;
  }
}

const texts = [
  [
    `2016年5月，国家邮政局与南京邮电大学共建现代邮政学院和现代邮政研究院。`,
    `2017年8月，南京邮电大学"微纳器件与信息系统创新引智基地"项目入选国家"111计划"。`,
    `2017年9月，南京邮电大学入选国家首批"一流学科"建设`
  ],
  [
    `学校拥有一支结构合理的师资队伍。`,
    `现有教职工2300余人，其中博士生、硕士生 导师721人，专任教师中具有高级专业技术职务的比例为58.56%，具有博士、硕士学位的比例为93.36%。`
  ],
  [
    `截至2016年末，博士后流动站3个，一级学科博士学位授予点3个、二级学科博士 学位授予点14个，一级学科硕士学位授予点10个、二级学科硕士学位授予点34个，专业学位授权点12个，以及MBA（工商管理硕士）和工程硕士学位授予权。`
  ],
  [
    `国家重点（培育）学科（1个）：信号与信息处理`,
    `江苏省优势学科（2个）：信息与通信工程、有机光电子学`,
    `江苏省重点一级学科（1个）：信息与通信工程`,
    `省重点序列学科（1个）：智能电网与控制技术`
  ]
];

const roundColors = ["#b49ac6", "#a9aed7", "#b49ac6", "#a9aed7"];

for (let i = 0; i < 4; i += 1) {
  const content = new Content({
    color: roundColors[i],
    text: texts[i]
  });
  contents.appendChild(content.render());
}

imgWrapper.appendChild(njuptImg);
imgWrapper.appendChild(imgBorder);
contentWrapper.appendChild(imgWrapper);
contentWrapper.appendChild(contents);
wrapper.appendChild(contentWrapper);

export default wrapper;
