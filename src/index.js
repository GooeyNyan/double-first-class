import "sass/normalize.scss";
// import styles from "sass/base.sass";
import "sass/base.sass";
import bannerElem from "./components/banner/banner";
import mainWrapper from "./components/mainWrapper/mainWrapper";

const app = document.getElementById(`app`);

const header = document.getElementById("header");
header.appendChild(bannerElem);

app.appendChild(mainWrapper);
