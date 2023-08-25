const navBar = document.querySelector(".nav-bar");
const wrapper = document.querySelector("#wrapper");
const aboutSection = document.querySelector(".about-section");
const allSkillImages = document.querySelectorAll(".skill-img");

// IMPLEMENTED NAVBAR STICKY POSITION ON SCROLL
const navOptions = {
  root: null,
  threshold: 0.25,
};

function navCallback(entries, target) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    navBar.classList.add("sticky-nav");
  }
}

// OBSERVER
const navObserver = new IntersectionObserver(navCallback, navOptions);

navObserver.observe(aboutSection);

//

// IMPLEMENTED PROJECT-IMAGES ANIMATION ON SCROLLING
const skillImageOptions = {
  root: null,
  threshold: 0.5,
};

const skillImageCallback = (entries) => {
  const [entry] = entries;
  //   EARLY RETURN
  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    allSkillImages.forEach((image) => {
      image.classList.add("img-animation");
    });
  }
  skillImageObserver.unobserve(entry.target);
};

// OBSERVER
const skillImageObserver = new IntersectionObserver(
  skillImageCallback,
  skillImageOptions
);

skillImageObserver.observe(aboutSection);
