import bannerImg from "./banner.jpg";
import styles from "./banner.sass";

const bannerElem = document.createElement(`div`);
bannerElem.className = styles.banner;
bannerElem.innerHTML = `<img src=${bannerImg} alt="南京邮电大学一流学科建设" class=${styles.img}>`;

// const height = window.innerHeight;

// const scrollToMain = scrollDuration => {
//   const cosParameter = window.scrollY / 2;
//   let scrollCount = 0;
//   let oldTimestamp = performance.now();
//   const step = newTimestamp => {
//     scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
//     if (scrollCount >= Math.PI) window.scrollTo(0, height);
//     if (window.scrollY === 0) return;
//     window.scrollTo(
//       0,
//       Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
//     );
//     oldTimestamp = newTimestamp;
//     window.requestAnimationFrame(step);
//   };
//   window.requestAnimationFrame(step);
// };

/* 
  Explanations:
  - pi is the length/end point of the cosinus intervall (see above)
  - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
    (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  - newTimestamp - oldTimestamp equals the duration

    a * cos (bx + c) + d                      | c translates along the x axis = 0
  = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
  = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
  = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
  = cosParameter + cosParameter * (cos scrollCount * x)
*/

const moreBtn = document.createElement(`div`);
moreBtn.className = styles.more;
// moreBtn.addEventListener("click", () => {
//   scrollToMain(300);
// });
// moreBtn.onclick = scrollToMain(1000);
bannerElem.appendChild(moreBtn);

export default bannerElem;
