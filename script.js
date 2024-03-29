const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

const lenisJs = () => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 700);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisJs();

function loaderAnimation() {
  const loaderTl = gsap.timeline();
  loaderTl.to(".loader-overlay", {
    top: "100%",
    duration: 2,
    ease: "power4.in",
    delay: 0.5,
  });

  loaderTl.to(".loader-box", {
    delay: 1,
    left: "6%",
    top: "10%",
    duration: 1,
  });

  loaderTl.to(
    ".loader",
    {
      opacity: 0,

      ease: "power4.inOut",
      duration: 1,
      delay: -0.5,
    },
    "same"
  );

  loaderTl.from("nav", {
    // y: -30,
    delay: -1,
    opacity: 0,
  });

  loaderTl.from(".page1-text-all", {
    opacity: 0,
    scale: 6,
    y: 0,
    x: 0,
    stagger: {
      amount: 5,
      from: "random",
    },
  });

  // loaderTl.from(".page1-footer-box>span", {
  //   scale: 0,
  //   stagger: {
  //     amount: 1.5,
  //     from: "random",
  //   },
  // });

  // loaderTl.from(".philippe-svg", {
  //   // opacity: 0,
  //   duration: 1,
  // });

  loaderTl.to(".philippe-path", {
    strokeDashoffset: 0,
    duration: 4,
  });

  loaderTl.to(
    ".berlin-text",
    {
      scale: 0,
      // y: -100,
      delay: -2.5,
    },
    "berlin"
  );

  loaderTl.to(
    ".berlin-svg",
    {
      opacity: 1,
      scale: 1,
      delay: -2.5,
    },
    "berlin"
  );

  loaderTl.to(
    ".vienna-text",
    {
      scale: 0,
      y: 100,
      delay: -1.5,
    },
    "vienna"
  );

  loaderTl.to(
    ".vienna-svg",
    {
      transform: "translate(-50%, -60%)",
      opacity: 1,
      delay: -1.5,
    },
    "vienna"
  );

  loaderTl.to(
    ".ux-text",
    {
      scale: 0,
      delay: -0.5,
    },
    "ux"
  );

  loaderTl.to(
    ".ux-svg",
    {
      opacity: 1,
      scale: 1,
      delay: -0.5,
    },
    "ux"
  );

  loaderTl.to(
    ".creativity-text",
    {
      scale: 0,
    },
    "creativity"
  );

  loaderTl.to(
    ".creativity-svg",
    {
      opacity: 1,
      scale: 1,
    },
    "creativity"
  );

  loaderTl.to(
    ".tailor-text",
    {
      scale: 0,
      y: 100,
    },
    "tailor"
  );

  loaderTl.to(
    ".tailor-svg",
    {
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
    "tailor"
  );

  loaderTl.to(
    ".experiences-text",
    {
      scale: 0,
    },
    "experiences"
  );

  loaderTl.to(
    ".experiences-svg",
    {
      opacity: 1,
      scale: 1,
    },
    "experiences"
  );

  loaderTl.to(
    ".brand-text",
    {
      scale: 0,
    },
    "brand"
  );

  loaderTl.to(
    ".brand-svg",
    {
      opacity: 1,
      scale: 1,
    },
    "brand"
  );
}
loaderAnimation();

function navAnimation() {
  const navElem1 = document.querySelector(".nav-elem1");

  clutterAnimation(".nav-elem1>h3");
  clutterAnimation(".nav-elem1>a");
  navElem1.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem1>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem1>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem1>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem1>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem1>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const navElem2 = document.querySelector(".nav-elem2");

  clutterAnimation(".nav-elem2>h3");
  clutterAnimation(".nav-elem2>a");
  navElem2.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem2>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem2>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem2>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem2>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem2>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const navElem3 = document.querySelector(".nav-elem3");

  clutterAnimation(".nav-elem3>h3");
  clutterAnimation(".nav-elem3>a");
  navElem3.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem3>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem3>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem3>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem3>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem3>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const navElem4 = document.querySelector(".nav-elem4");

  clutterAnimation(".nav-elem4>h3");
  clutterAnimation(".nav-elem4>a");
  navElem4.addEventListener("mouseenter", () => {
    gsap.to(".nav-elem4>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".nav-elem4>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".nav-elem4>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".nav-elem4>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".nav-elem4>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });
}

navAnimation();

function textFlyoutAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1-footer",
      start: "top 60%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  tl.from(
    ".p",
    {
      x: -520,
      y: 100,
      scale: 5,
      rotate: -320,
      opacity: 0.3,
    },
    "same"
  )
    .from(
      ".h",
      {
        x: -250,
        y: -700,
        scale: 4,
        rotate: 220,
        opacity: 0.3,
      },
      "same"
    )
    .from(
      ".i",
      {
        y: -500,
        x: -800,
        rotate: 260,
        scale: 4,
        opacity: 0.3,
      },
      "same"
    )

    .from(
      ".l",
      {
        y: -650,
        x: 200,
        rotate: 260,
        scale: 6,
        opacity: 0.3,
      },
      "same"
    )
    .from(
      ".i2",
      {
        y: -500,
        x: 800,
        rotate: 260,
        scale: 4,
        opacity: 0.3,
      },
      "same"
    )

    .from(
      ".p2",
      {
        y: -100,
        x: 400,
        rotate: 300,
        scale: 2,
        opacity: 0.3,
      },
      "same"
    )
    .from(
      ".p3",
      {
        y: 50,
        x: -200,
        rotate: 300,
        scale: 5,
        opacity: 0.3,
      },
      "same"
    )
    .from(
      ".e",
      {
        x: 520,
        y: 200,
        scale: 5,
        rotate: 180,
        opacity: 0.3,
      },
      "same"
    );
}
textFlyoutAnimation();

gsap.to(".svg-overlay", {
  top: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-footer",
    start: "top 50%",
    end: "top -40%",
    scrub: 1,
    // markers: true,
  },
});

function page2Animation() {
  clutterAnimation(".page2-title > h1");
  gsap.from(".page2-title > h1>span", {
    y: 200,
    opacity: 0,
    // rotate: 180,
    stagger: {
      amount: 2,
      from: "random",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-title>h1",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
      // markers: true,
    },
  });

  const page2PartsTl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 0%",
      end: "top -1200%",
      pin: true,
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page2-right,.page2-rotation", {
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // markers: true,
    },
  });

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "01";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 0) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same"
  );

  // page2PartsTl.to(
  //   ".page2-title > h1 ",
  //   {
  //     color: "transparent",
  //   },
  //   "same"
  // );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#DB4D1A",
    },
    "same"
  );

  page2PartsTl.to(
    ".page2-part1",
    {
      top: "-100%",
    },
    "same"
  );

  page2PartsTl.to(
    ".part1-text",
    {
      left: "-100%",
    },
    "same"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "02";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 1) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same1"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#B3B3B3",
    },
    "same1"
  );

  page2PartsTl.to(
    ".page2-part2",
    {
      top: "-100%",
    },
    "same1"
  );

  page2PartsTl.to(
    ".part2-text",
    {
      left: "-100%",
    },
    "same1"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "03";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 2) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same2"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#3E8DCE",
    },
    "same2"
  );

  page2PartsTl.to(
    ".page2-part3",
    {
      top: "-100%",
    },
    "same2"
  );

  page2PartsTl.to(
    ".part3-text",
    {
      left: "-100%",
    },
    "same2"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "04";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 3) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same3"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#A031FF",
    },
    "same3"
  );

  page2PartsTl.to(
    ".page2-part4",
    {
      top: "-100%",
    },
    "same3"
  );

  page2PartsTl.to(
    ".part4-text",
    {
      left: "-100%",
    },
    "same3"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "05";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 4) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same4"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#3B7977",
    },
    "same4"
  );

  page2PartsTl.to(
    ".page2-part5",
    {
      top: "-100%",
    },
    "same4"
  );

  page2PartsTl.to(
    ".part5-text",
    {
      left: "-100%",
    },
    "same4"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "06";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 5) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same5"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#1477FB",
    },
    "same5"
  );

  page2PartsTl.to(
    ".page2-part6",
    {
      top: "-100%",
    },
    "same5"
  );

  page2PartsTl.to(
    ".part6-text",
    {
      left: "-100%",
    },
    "same5"
  );

  page2PartsTl.to(
    ".parts-counter",
    {
      onUpdate: () => {
        document.querySelector(".parts-counter").textContent = "07";
        const allNavigation = document.querySelectorAll(
          ".page2-navigation-circle"
        );
        allNavigation.forEach((item, index) => {
          if (index === 6) {
            gsap.to(item, {
              backgroundColor: "#000",
            });
          } else {
            gsap.to(item, {
              backgroundColor: "#fff",
            });
          }
        });
      },
    },
    "same6"
  );

  page2PartsTl.to(
    ".page2",
    {
      backgroundColor: "#AE928D",
    },
    "same6"
  );

  page2PartsTl.to(
    ".page2-part7",
    {
      top: "-100%",
    },
    "same6"
  );

  page2PartsTl.to(
    ".part7-text",
    {
      left: "-100%",
    },
    "same6"
  );
  page2PartsTl.to(".page2", {
    backgroundColor: "#EBE4DF",
  });
}
page2Animation();

clutterAnimation(".page3-title-box > h1");
gsap.from(".page3-title-box > h1>span", {
  y: 200,
  opacity: 0,
  scale: 3,
  // rotate: 180,
  stagger: {
    amount: 2,
    from: "center",
  },
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-title-box",
    start: "top 75%",
    end: "top 40%",
    scrub: 1,
    // markers: true,
  },
});

function page3MouseFollowerAnimation() {
  const page3TextBox = document.querySelector(".page3-box");

  // Select the circle element
  const circleElement = document.querySelector(".page3-mousefollower");

  page3TextBox.addEventListener("mousemove", (dets) => {
    gsap.to(".page3-mousefollower", {
      opacity: 1,
      left: dets.x,
      top: dets.y,
      scale: 1,
    });
  });

  page3TextBox.addEventListener("mouseleave", (e) => {
    gsap.to(".page3-mousefollower", {
      opacity: 0,
      scale: 0,
    });
  });
}

gsap.from(".page3-elem", {
  opacity: 0.3,
  stagger: {
    amount: 3,
  },
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "top 30%",
    end: "top -10%",
    scrub: 1,
    // pin: true,
    // markers: true,
  },
});

Shery.makeMagnet(".page3-elem" /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

page3MouseFollowerAnimation();

const mousefollowerImgArray = ["./Imgs/coco-cola.png", ""];
const page3Img = document.querySelector(".page3-mousefollower>img");

const page3AllElem = document.querySelectorAll(".page3-elem");
page3AllElem.forEach((elem, index) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(page3Img, {
      // Example: Fade out the image
      onComplete: function () {
        // Change the src attribute after the animation is complete
        page3Img.src = mousefollowerImgArray[index];

        // Use GSAP to fade in the new image
        gsap.to(page3Img, {
          duration: 0.5,
          opacity: 1,
        });
      },
    });
  });
});

clutterAnimation(".page4-title-box > h1");
gsap.from(".page4-title-box > h1>span", {
  y: 200,
  opacity: 0,
  // rotate: 180,
  scale: 0.5,
  stagger: {
    amount: 2,
  },
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4-title-box",
    start: "top 75%",
    end: "top 40%",
    scrub: 1,
    // markers: true,
  },
});

clutterAnimation(".page5-title-box > h1");
function page5Animation() {
  gsap.to(".main", {
    backgroundColor: "#404040",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5",
      start: "top 30%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page5-title-box > h1>span", {
    x: 200,
    opacity: 0,
    // rotate: 180,
    scale: 0.5,
    stagger: {
      amount: 2,
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5-title-box",
      start: "top 20%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  // const page5AnimationTl = gsap.timeline({
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".page5-box",
  //     start: "top 0",
  //     end: "top -1200%",
  //     scrub: 1,
  //     pin: true,
  //   },
  // });

  // page5AnimationTl.to(
  //   ".page5-left-part1",
  //   {
  //     top: "-30%",
  //   },
  //   "p5-p1"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video1",
  //   {
  //     top: "-100%",
  //   },
  //   "p5-p1"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part2",
  //   {
  //     top: "-50%",
  //   },
  //   "p5-p2"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video2",
  //   {
  //     top: "-210%",
  //   },
  //   "p5-p2"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part3",
  //   {
  //     top: "-65%",
  //   },
  //   "p5-p3"
  // );

  // page5AnimationTl.to(
  //   ".page5-circle > .video3",
  //   {
  //     top: "-310%",
  //   },
  //   "p5-p3"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part4",
  //   {
  //     top: "-80%",
  //   },
  //   "p5-p4"
  // );
  // page5AnimationTl.to(
  //   ".page5-circle > .video4",
  //   {
  //     top: "-510%",
  //   },
  //   "p5-p4"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part5",
  //   {
  //     top: "-80%",
  //   },
  //   "p5-p5"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part6",
  //   {
  //     top: "-100%",
  //   },
  //   "p5-p6"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part7",
  //   {
  //     top: "-110%",
  //   },
  //   "p5-p7"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part8",
  //   {
  //     top: "-130%",
  //   },
  //   "p5-p8"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part9",
  //   {
  //     top: "-140%",
  //   },
  //   "p5-p9"
  // );

  // page5AnimationTl.to(
  //   ".page5-left-part10",
  //   {
  //     top: "-70%",
  //   },
  //   "p5-p10"
  // );
}

page5Animation();

const page5AllSvg = document.querySelectorAll(".page5-all-svg");
const page5AllTitles = document.querySelectorAll(".page5-all-titles");

let flag = 0;
page5AllSvg.forEach((svg, index) => {
  svg.addEventListener("click", () => {
    if (flag === 0) {
      gsap.to(svg, {
        rotate: "45deg",
      });
      for (let i = 0; i < page5AllTitles.length; i++) {
        if (i === index) {
          if (index === 3 || index === 7) {
            gsap.to(page5AllTitles[i], {
              height: "34vw",
            });
          } else if (index === 5) {
            gsap.to(page5AllTitles[i], {
              height: "28vw",
            });
          } else {
            gsap.to(page5AllTitles[i], {
              height: "22vw",
            });
          }
        } else {
          gsap.to(page5AllTitles[i], {
            height: "6vw",
          });
          gsap.to(page5AllSvg[i], {
            rotate: "0deg",
          });
        }
      }
      flag = 1;
    } else {
      gsap.to(svg, {
        rotate: "0deg",
      });

      gsap.to(page5AllTitles[index], {
        height: "6vw",
      });

      flag = 0;
    }
  });
});

clutterAnimation(".page6-title-box > h1");
clutterAnimation(".page6>p");

function page6Animation() {
  gsap.from(".page6-title-box > h1>span", {
    y: -200,
    opacity: 0,
    // rotate: 180,
    scale: 0.5,
    stagger: {
      amount: 2,
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page6-title-box",
      start: "top 50%",
      end: "top 30%",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page6>p>span", {
    opacity: 0.1,
    stagger: {
      amount: 2,
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page6-title-box",
      start: "top 30%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".strip1-scroller", {
    transform: "translateX(-40%)",
    scrollTrigger: {
      body: "body",
      trigger: ".strip1-scroller",
      start: "top 100%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.to(".strip2-scroller", {
    transform: "translateX(-40%)",
    scrollTrigger: {
      body: "body",
      trigger: ".strip2-scroller",
      start: "top 100%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".strip3-scroller", {
    transform: "translateX(-40%)",
    scrollTrigger: {
      body: "body",
      trigger: ".strip3-scroller",
      start: "top 100%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.to(".strip4-scroller", {
    transform: "translateX(-40%)",
    scrollTrigger: {
      body: "body",
      trigger: ".strip4-scroller",
      start: "top 100%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });
}
page6Animation();

function page7Animation() {
  const page7Tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page7",
      start: "top 0%",
      end: "top -300%",
      scrub: 1,
      // markers: true,
      pin: true,
    },
  });

  page7Tl.from(".page7-title-box", {
    scale: 300,
    transform: "translateX(-130%)",
  });

  page7Tl.from(
    ".page7-left",
    {
      opacity: 0,
    },
    "same"
  );

  page7Tl.from(
    ".page7-right",
    {
      y: 800,
    },
    "same"
  );

  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Shery.imageEffect(".page7-right", {
      style: 5,
      gooey: true,
      // debug: true,
      config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.94, range: [-1, 1] },
        zindex: { value: "9", range: [-9999999, 9999999] },
        aspect: { value: 0.9100550410070063 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.32, range: [0, 2], _gsap: { id: 508 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
    });
  }
}
page7Animation();

function page8Animation() {
  gsap.from(".page8-elem > h1,.page8 a", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page8-elem",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
      // markers: true,
    },
  });
}

page8Animation();

function page9Animation() {
  const footerElem1 = document.querySelector(".footer-elem1");

  clutterAnimation(".footer-elem1>h3");
  clutterAnimation(".footer-elem1>a");
  footerElem1.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem1>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem1>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem1>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem1>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem1>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem2 = document.querySelector(".footer-elem2");

  clutterAnimation(".footer-elem2>h3");
  clutterAnimation(".footer-elem2>a");
  footerElem2.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem2>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem2>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem2>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem2>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem2>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem3 = document.querySelector(".footer-elem3");

  clutterAnimation(".footer-elem3>h3");
  clutterAnimation(".footer-elem3>a");
  footerElem3.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem3>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem3>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem3>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem3>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem3>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem4 = document.querySelector(".footer-elem4");

  clutterAnimation(".footer-elem4>h3");
  clutterAnimation(".footer-elem4>a");
  footerElem4.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem4>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem4>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem4>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem4>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem4>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem5 = document.querySelector(".footer-elem5");

  clutterAnimation(".footer-elem5>h3");
  clutterAnimation(".footer-elem5>a");
  footerElem5.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem5>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem5>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem5>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem5>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem5>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem6 = document.querySelector(".footer-elem6");

  clutterAnimation(".footer-elem6>h3");
  clutterAnimation(".footer-elem6>a");
  footerElem6.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem6>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem6>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem6>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem6>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem6>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });

  const footerElem7 = document.querySelector(".footer-elem7");

  clutterAnimation(".footer-elem7>h3");
  clutterAnimation(".footer-elem7>a");
  footerElem7.addEventListener("mouseenter", () => {
    gsap.to(".footer-elem7>a", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
    });

    gsap.to(".footer-elem7>h3>span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(".footer-elem7>h3>span", {
          y: 0,
          opacity: 0,
          duration: 0.1,
        });
        tl.to(".footer-elem7>h3>span", {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(".footer-elem7>a", {
          duration: 0.3,
          opacity: 0,
        });
      },
    });
  });
}

page9Animation();
