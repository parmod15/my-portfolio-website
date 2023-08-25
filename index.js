const navBar = document.querySelector(".nav-bar");
const wrapper = document.querySelector("#wrapper");

// IMPLEMENTED NAVBAR STICKY POSITION ON SCROLL
const options = {
  root: null,
  threshold: 0.25,
};

const callback = () => {
  navBar.classList.add("sticky-nav");
};

let observer = new IntersectionObserver(callback, options);

observer.observe(wrapper);
