const navBar = document.querySelector(".nav-bar");
const wrapper = document.querySelector("#wrapper");
const aboutSection = document.querySelector(".about-section");
const allSkillImages = document.querySelectorAll(".skill-img");
const techStack = document.querySelector(".tech-stack");
const techContainer = document.querySelector(".tech-container");
const htmlSkill = document.querySelector(".html-skill");
const cssSkill = document.querySelector(".css-skill");
const jsSkill = document.querySelector(".js-skill");
const reactSkill = document.querySelector(".react-skill");
const nodeSkill = document.querySelector(".node-skill");
const sqlSkill = document.querySelector(".sql-skill");
const uiSkill = document.querySelector(".ui-skill");
const javaSkill = document.querySelector(".java-skill");
const detailsContainer = document.querySelector(".details-container");
const myImage = document.querySelector(".my-image");
const headingDetails = document.querySelector(".heading-details");
const projectSection = document.querySelector(".project-section");
const projectImageContainer = document.querySelector(
  ".project-image-container"
);

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

// IMPLEMENTED SKILL-IMAGES ANIMATION ON SCROLLING
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

// IMPLEMENTED TECH - STACK ANIMATION ON SCROLLING
const techOption = {
  root: null,
  threshold: 0.5,
};

const techCallback = (entries) => {
  const [entry] = entries;
  //   EARLY RETURN
  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    htmlSkill.classList.add("html-skill-width");
    cssSkill.classList.add("css-skill-width");
    jsSkill.classList.add("javascript-skill-width");
    reactSkill.classList.add("react-skill-width");
    nodeSkill.classList.add("node-skill-width");
    sqlSkill.classList.add("sql-skill-width");
    uiSkill.classList.add("ui-skill-width");
    javaSkill.classList.add("java-skill-width");

    // CSS ANIMATION ON IMAGE AND TECH STACK
    techContainer.classList.remove("hidden-display-right");
    detailsContainer.classList.remove("hidden-display-left");

    // CSS ANIMATION OF MY DETAILS
    detailsContainer.classList.add("my-details-container");
    myImage.classList.add("image-my-details");
    headingDetails.classList.add("heading-my-details");
  }
  techObserver.unobserve(entry.target);
};

// OBSERVER
const techObserver = new IntersectionObserver(techCallback, techOption);

techObserver.observe(techStack);

// IMPLEMENTED PROJECT-SECTION ANIMATION ON SCROLLING
const projectImageOptions = {
  root: null,
  threshold: 0.5,
};

const projectImageCallback = (entries) => {
  const [entry] = entries;
  //   EARLY RETURN
  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    projectImageContainer.classList.remove("display-hidden");
  }
  projectImageObserver.unobserve(entry.target);
};

// OBSERVER
const projectImageObserver = new IntersectionObserver(
  projectImageCallback,
  projectImageOptions
);

projectImageObserver.observe(projectSection);
