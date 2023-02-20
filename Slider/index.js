const mainContainer = document.querySelector(".main-container");
const slideRight = document.querySelector(".right-slider");
const slideLeft = document.querySelector(".left-slider");
const upButton = document.querySelector(".up-button");
let activeSlideIndex = 0;

upButton.addEventListener("click", () => changeSlide());

const changeSlide = () => {
  const slideHeight = slideRight.children[0].clientHeight;

  let currentMarginTop = Number(slideRight.style.marginTop.slice(0, -2));
  if (currentMarginTop === -slideHeight * (slideRight.children.length - 1)) {
    slideRight.style.marginTop = "0px";
  } else {
    slideRight.style.marginTop = currentMarginTop - Number(slideHeight) + "px";
  }
};
