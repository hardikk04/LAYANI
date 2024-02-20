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

const clutterAnimationForWords = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split(" ").forEach((word, index) => {
    clutter += `<div><span class='text${index}'>${word + " "}</span></div>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};
clutterAnimationForWords(".page1-hero-text>h3");

function loaderAnimation() {
  const loaderTl = gsap.timeline();
  loaderTl.to(".loader-overlay", {
    top: "100%",
    duration: 2,
    ease: "power4.in",
    delay: 0.5,
  });

  loaderTl.to(
    ".loader",
    {
      opacity: 0,
      ease: "power4.inOut",
      duration: 1,
      delay: 0.5,
    },
    "same"
  );

  loaderTl.from("nav", {
    y: -30,
    opacity: 0,
  });

  loaderTl.from(".page1-hero-text>h3>div>span", {
    y: 100,
    stagger: {
      amount: 2,
      from: "random",
    },
  });

  loaderTl.from(".page1-footer-box>span", {
    opacity: 0,
    stagger: {
      amount: 1,
      from: "random",
    },
  });
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
      start: "top 50%",
      end: "top 20%",
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
      },
      "same"
    )

    .from(
      ".p2",
      {
        y: -200,
        x: 400,
        rotate: 300,
        scale: 2,
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
    rotate: 180,
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
      end: "top -1000%",
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
  rotate: 180,
  stagger: {
    amount: 2,
    from: "random",
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
