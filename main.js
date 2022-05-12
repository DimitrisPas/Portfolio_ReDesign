const cursor = document.querySelector(".test");

const anchor = document.getElementsByTagName("a");

const burger = document.querySelector(".burger-container");

const close = document.querySelector(".close");

const nav = document.querySelector(".nav__list");

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => {
  n.addEventListener("click", () => {
    nav.classList.remove("menu-opened");
    document.documentElement.style.overflow = "visible";
  });
});

burger.addEventListener("click", () => {
  nav.classList.add("menu-opened");
  document.documentElement.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  nav.classList.remove("menu-opened");
  document.documentElement.style.overflow = "visible";
});

// CUSTOM CURSOR

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 2) + "px; left: " + (e.pageX - 2) + "px;"
  );
});

for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("mouseover", () => {
    cursor.classList.remove("cursor");
    cursor.classList.add("cursor2");
  });
}

for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("mouseout", () => {
    cursor.classList.remove("cursor2");
    cursor.classList.add("cursor");
  });
}

// CUSTOM TITLE WHEN TABBED OUT

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState == "visible") {
    document.title = "DP.";
  } else {
    document.title = "Please come back 😔";
  }
});

// CHANGE THINGS ON SCROLL

window.onscroll = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 250) {
    document.body.style.background = "#efe5df";
    header.style.background = "#efe5df";
  } else {
    document.body.style.background = "#e9e6e3";
    header.style.background = "#e9e6e3";
  }
};

// GSAP ANIMATIONS
let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: "1"}});

let lines = CSSRulePlugin.getRule(".work-row:after");

tl.to(".header", {top: "0", duration: 1.3})
  .to(
    ".hero__title, .short-desc",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: "1",
      y: 0,
    },
    "+=.5"
  )
  .to(".projects__intro h2", {
    scrollTrigger: ".work-holder",
    x: 0,
    duration: 1,
  });
