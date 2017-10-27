/*
 * @Author: Gooey Nyan 
 * @Date: 2017-10-27 13:42:51 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-27 14:48:04
 */
import styles from "./footer.sass";

const footer = document.createElement("footer");
footer.className = styles.footer;

class Address {
  constructor(params) {
    this.campus = params.campus;
    this.address = params.address;
    this.postcode = params.postcode;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = styles.addressItem;
    const address = document.createElement("span");
    address.textContent = `${this.campus}校区地址：南京市${this.address} 邮编：${this
      .postcode}`;
    wrapper.appendChild(address);
    return wrapper;
  }
}

const addresses = [
  {
    campus: "仙林",
    address: `亚东新区文苑路9号`,
    postcode: 210023
  },
  {
    campus: "三牌楼",
    address: `新模范马路66号`,
    postcode: 210003
  },
  {
    campus: "锁金村",
    address: `龙蟠路177号`,
    postcode: 210042
  }
];

const addressWrapper = document.createElement("div");
addressWrapper.className = styles.addressWrapper;
for (const address of addresses) {
  const el = new Address(address);
  el.className = styles.addressItem;
  addressWrapper.appendChild(el.render());
}

const line = document.createElement("div");
line.className = styles.line;

const copyright = document.createElement("p");
copyright.innerHTML = `Copyright &copy; 1942 - 2017 Nanjing University of Posts and Telecommunications All Rights Reserved`;

footer.appendChild(addressWrapper);
footer.appendChild(line);
footer.appendChild(copyright);

export default footer;
