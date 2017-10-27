/*
 * @Author: Gooey Nyan 
 * @Date: 2017-09-26 12:16:26 
 * @Last Modified by: Gooey Nyan
 * @Last Modified time: 2017-10-27 13:35:12
 */
import icons from "sass/_icon.scss";
import styles from "./squares.sass";

const squaresWrapper = document.createElement("div");
squaresWrapper.className = styles.wrapper;

class Square {
  constructor(params) {
    this.color = params.color;
    this.title = params.title;
    this.text = params.text;
    this.icon = params.icon;
    this.link = params.link;
  }

  render() {
    const a = document.createElement("a");
    a.href = this.link;
    const wrapper = document.createElement("div");
    wrapper.className = styles.squareItem;
    wrapper.style.background = this.color;

    const title = document.createElement("h2");
    title.className = styles.title;
    title.textContent = this.title;

    const text = document.createElement("p");
    text.className = styles.text;
    text.textContent = this.text;

    const icon = document.createElement("i");
    icon.className = icons[`icon-${this.icon}`];

    wrapper.appendChild(title);
    wrapper.appendChild(text);
    wrapper.appendChild(icon);

    a.appendChild(wrapper);
    return a;
  }
}

const schoolSquare = new Square({
  color: "#a4c9e2",
  title: "学校建设",
  text: "对学校建设的一句话总结",
  icon: "office",
  link: "#"
});
const teachSquare = new Square({
  color: "#abaed6",
  title: "人才培养",
  text: "对人才培养的一句话总结",
  icon: "book",
  link: "#"
});
const jobSquare = new Square({
  color: "#b59dc4",
  title: "科学研究",
  text: "对科学研究的一句话总结",
  icon: "library",
  link: "#"
});

squaresWrapper.appendChild(schoolSquare.render());
squaresWrapper.appendChild(teachSquare.render());
squaresWrapper.appendChild(jobSquare.render());

export default squaresWrapper;
