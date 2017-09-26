import sqareImg1 from "./01.jpg";
import sqareImg2 from "./02.jpg";
import sqareImg3 from "./03.jpg";
import sqareImg4 from "./04.jpg";
import styles from "./squares.sass";

const sqaresWrapper = document.createElement("div");
sqaresWrapper.className = styles.wrapper;
sqaresWrapper.innerHTML = `
<img src=${sqareImg1} alt="入选双一流">
<img src=${sqareImg2} alt="教学投入">
<img src=${sqareImg3} alt="师资力量">
<img src=${sqareImg4} alt="研究方向">
`;

export default sqaresWrapper;
