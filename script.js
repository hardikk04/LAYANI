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

function generateRandomLowercaseLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters.charAt(randomIndex);
}

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
