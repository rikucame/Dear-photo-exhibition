window.onload = () => {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  rightArrow.classList.add("onDisplay");
  document.getElementById("film").onscroll = function () {
    scrollValue = this.scrollLeft;
    if (scrollValue < 10) {
      leftArrow.classList.remove("onDisplay");
      rightArrow.classList.add("onDisplay");
    } else if (scrollValue >= 10 && scrollValue < 1600) {
      leftArrow.classList.add("onDisplay");
      rightArrow.classList.add("onDisplay");
    } else if (scrollValue >= 1600) {
      leftArrow.classList.add("onDisplay");
      rightArrow.classList.remove("onDisplay");
    }
  };
};
