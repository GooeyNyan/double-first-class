import styles from "./overview.sass";

const wrapper = document.createElement("div");
wrapper.className = styles.wrapper;

const titleElem = document.createElement("h2");
titleElem.className = styles.title;
titleElem.innerText = "校园概况";
const title = [titleElem];

const small = [];
const smallText = [
  "在这次的双一流评选中，南京邮电大学在电子信息类大学与江苏省属高校中脱颖而出，率先入选世界一流学科并且提出建设中国高水平研究型大学。",
  "标志着南京邮电大学学科建设进入世界一流行列，全校综合实力位于全国前列。"
];

for (const item of smallText) {
  const elem = document.createElement("p");
  elem.className = styles.small;
  elem.innerText = item;
  small.push(elem);
}

const desc = [];
const descText = [
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

for (const item of descText) {
  const textWrapper = document.createElement("div");
  textWrapper.className = styles["desc-wrapper"];
  for (const text of item) {
    const textElem = document.createElement("p");
    textElem.className = styles.desc;
    textElem.innerText = text;
    textWrapper.appendChild(textElem);
  }
  desc.push(textWrapper);
}

const elems = title.concat(small, desc);
for (const item of elems) {
  wrapper.appendChild(item);
}

export default wrapper;
