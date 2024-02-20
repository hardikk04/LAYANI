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

  loaderTl.to(".loader", {
    top: "-100vh",
    ease: "power4.inOut",
    duration: 1,
    delay: 0.5,
  });

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

  tl.to(
    ".p",
    {
      x: -820,
      y: -200,
      scale: 5,
      rotate: -180,
    },
    "same"
  )
    .to(
      ".h",
      {
        x: -950,
        y: 100,
        scale: 6,
        rotate: 180,
      },
      "same"
    )
    .to(
      ".i",
      {
        y: -500,
        x: -800,
        rotate: 260,
        scale: 4,
      },
      "same"
    )

    .to(
      ".l",
      {
        y: -800,
        rotate: 260,
        scale: 6,
      },
      "same"
    )
    .to(
      ".i2",
      {
        y: -500,
        x: 800,
        rotate: 260,
        scale: 4,
      },
      "same"
    )

    .to(
      ".p2",
      {
        y: -700,
        x: 900,
        rotate: 300,
        scale: 8,
      },
      "same"
    )
    .to(
      ".p3",
      {
        y: -400,
        x: 800,
        rotate: 300,
        scale: 5,
      },
      "same"
    )
    .to(
      ".e",
      {
        x: 850,
        y: 100,
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

clutterAnimation(".page2-title-box > h1");
gsap.from(".page2-title-box > h1>span", {
  y: 200,
  opacity: 0,
  rotate: 180,
  stagger: {
    amount: 2,
    from: "random",
  },
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-title-box",
    start: "top 75%",
    end: "top 40%",
    scrub: 1,
    // markers: true,
  },
});

function page2Part1Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part1",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#DB4D1A",
    },
    "same"
  );
  tl.to(
    ".page2-title-box > h1",
    {
      color: "#fff",
    },
    "same"
  );

  tl.from(
    ".page2-part1-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part1-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part1 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part1",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part1Animation();

function page2Part2Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part2",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#B3B3B3",
    },
    "same"
  );

  tl.from(
    ".page2-part2-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part2-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part2 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part2",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part2Animation();

function page2Part3Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part3",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#3E8DCE",
    },
    "same"
  );

  tl.from(
    ".page2-part3-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part3-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part3 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part3",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part3Animation();

function page2Part4Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part4",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#A031FF",
    },
    "same"
  );

  tl.from(
    ".page2-part4-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part4-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part4 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part4",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part4Animation();

function page2Part5Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part5",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#3B7977",
    },
    "same"
  );

  tl.from(
    ".page2-part5-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part5-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part5 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part5",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part5Animation();

function page2Part6Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part6",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#1477FB",
    },
    "same"
  );

  tl.from(
    ".page2-part6-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part6-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part6 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part6",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part6Animation();

function page2Part7Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part7",
      start: "top 40%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.to(
    ".main",
    {
      backgroundColor: "#AE928D",
    },
    "same"
  );

  tl.from(
    ".page2-part7-right>h3",
    {
      opacity: 0,
    },
    "same"
  );
  tl.from(
    ".page2-part7-circle",
    {
      y: 600,
    },
    "same"
  );

  tl.from(".page2-part7 > h1", {
    left: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2-part7",
      start: "top 40%",
      end: "top -40%",
      scrub: 1,
      // markers: true,
    },
  });
}
page2Part7Animation();
