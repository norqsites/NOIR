/* ==========================================
   GSAP SETUP
========================================== */

gsap.registerPlugin(ScrollTrigger);



/* ==========================================
   ELEMENTS
========================================== */

const coffee =
    document.querySelector(
        ".travelling-coffee"
    );

const hero =
    document.querySelector(".hero");

const story =
    document.querySelector(".story");

const product =
    document.querySelector(
        ".product-section"
    );

const collection =
    document.querySelector(
        ".collection"
    );

const darkCard =
    document.querySelector(
        ".dark-card"
    );

const cta =
    document.querySelector(".cta");



/* ==========================================
   INITIAL COFFEE POSITION

   HERO:

   Right side
   Slightly tilted right
========================================== */

gsap.set(coffee, {

    xPercent: -50,
    yPercent: -50,

    x: "24vw",

    y: "-2vh",

    rotation: 7,

    scale: 1

});



/* ==========================================
   HERO TEXT ENTRANCE
========================================== */

gsap.from(
    ".hero-content",
    {

        opacity: 0,

        y: 60,

        duration: 1.2,

        ease: "power3.out"

    }
);



/* ==========================================
   COFFEE ENTRANCE
========================================== */

gsap.from(
    coffee,
    {

        opacity: 0,

        scale: 0.75,

        rotation: -10,

        duration: 1.3,

        delay: 0.2,

        ease: "power3.out"

    }
);



/* ==========================================
   MAIN COFFEE JOURNEY
========================================== */

const coffeeJourney =
    gsap.timeline({

        scrollTrigger: {

            trigger: hero,

            start: "top top",

            /*
                The timeline continues
                all the way until CTA.
            */

            endTrigger: cta,

            end: "top top",

            scrub: 1.2,

            invalidateOnRefresh: true

        }

    });



/* ==========================================
   HERO

   RIGHT + SLIGHT RIGHT TILT
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "24vw",

        y: "-2vh",

        rotation: 7,

        scale: 1,

        duration: 1

    }
);



/* ==========================================
   HERO → STORY

   SAME HORIZONTAL POSITION

   MOVES DOWN

   BECOMES BIGGER
========================================== */

coffeeJourney.to(
    coffee,
    {
        x: "27vw",
        y: "17vh",
        rotation: 3,
        scale: 1.55,
        duration: 1.5,
        ease: "none"
    }
);



/* ==========================================
   STORY → BLEND

   MOVE RIGHT

   TILT LEFT
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "30vw",

        y: "8vh",

        rotation: -7,

        scale: 1,

        duration: 1.5,

        ease: "none"

    }
);



/* ==========================================
   BLEND → COLLECTION

   MOVE TO CENTER

   This gets the coffee visually
   toward the DARK card.
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "0vw",

        y: "5vh",

        rotation: 0,

        scale: 1.05,

        duration: 1.5,

        ease: "power2.inOut"

    }
);



/* ==========================================
   COLLECTION HOLD

   Coffee stays here for a moment.

   This creates the feeling that
   it has "landed".
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "0vw",

        y: "5vh",

        rotation: 0,

        scale: 1.05,

        duration: 1

    }
);



/* ==========================================
   COLLECTION → CTA

   MOVE COFFEE TO LEFT
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "-28vw",

        y: "5vh",

        rotation: -5,

        scale: 1.08,

        duration: 1.5,

        ease: "power2.inOut"

    }
);



/* ==========================================
   CTA COFFEE FINAL POSITION
========================================== */

coffeeJourney.to(
    coffee,
    {

        x: "-28vw",

        y: "5vh",

        rotation: -5,

        scale: 1.08,

        duration: 1

    }
);



/* ==========================================
   STORY TEXT
========================================== */

gsap.from(
    ".story-text",
    {

        opacity: 0,

        x: -100,

        scrollTrigger: {

            trigger: story,

            start: "top 75%",

            end: "top 35%",

            scrub: true

        }

    }
);



/* ==========================================
   BLEND TEXT
========================================== */

gsap.from(
    ".product-copy",
    {

        opacity: 0,

        x: -100,

        scrollTrigger: {

            trigger: product,

            start: "top 75%",

            end: "top 35%",

            scrub: true

        }

    }
);



/* ==========================================
   COLLECTION HEADING
========================================== */

gsap.from(
    ".collection-heading",
    {

        opacity: 0,

        y: 80,

        scrollTrigger: {

            trigger: collection,

            start: "top 75%",

            end: "top 45%",

            scrub: true

        }

    }
);



/* ==========================================
   COLLECTION CARDS
========================================== */

gsap.from(
    ".coffee-card",
    {

        opacity: 0,

        y: 100,

        stagger: 0.15,

        scrollTrigger: {

            trigger: ".coffee-grid",

            start: "top 80%",

            toggleActions:
                "play none none reverse"

        }

    }
);



/* ==========================================
   CTA TEXT
========================================== */

gsap.from(
    ".cta-content",
    {

        opacity: 0,

        x: 100,

        scrollTrigger: {

            trigger: cta,

            start: "top 70%",

            end: "top 35%",

            scrub: true

        }

    }
);



/* ==========================================
   REFRESH AFTER PAGE LOAD
========================================== */

window.addEventListener(
    "load",
    () => {

        ScrollTrigger.refresh();

    }
);