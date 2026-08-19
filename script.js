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
   RESPONSIVE COFFEE JOURNEY
========================================== */

const mm = gsap.matchMedia();


/* ==========================================
   DESKTOP
========================================== */

mm.add("(min-width: 769px)", () => {

    /* INITIAL POSITION */

    gsap.set(coffee, {

        xPercent: -50,
        yPercent: -50,

        x: "24vw",

        y: "-2vh",

        rotation: 7,

        scale: 1

    });


    /* HERO ENTRANCE */

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


    /* DESKTOP JOURNEY */

    const coffeeJourney =
        gsap.timeline({

            scrollTrigger: {

                trigger: hero,

                start: "top top",

                endTrigger: cta,

                end: "top top",

                scrub: 1.2,

                invalidateOnRefresh: true

            }

        });


    /* HERO */

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


    /* HERO → STORY */

    coffeeJourney.to(
        coffee,
        {

            x: "25vw",

            y: "17vh",

            rotation: 3,

            scale: 1.45,

            duration: 1.5,

            ease: "none"

        }
    );


    /* STORY → BLEND */

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


    /* BLEND → COLLECTION */

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


    /* COLLECTION HOLD */

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


    /* COLLECTION → CTA */

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


    /* CTA HOLD */

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

});


/* ==========================================
   MOBILE
========================================== */

mm.add("(max-width: 768px)", () => {

    /* INITIAL MOBILE POSITION */
gsap.set(coffee, {

    xPercent: -50,
    yPercent: -50,

    x: "30vw",

    y: "32vh",

    rotation: 9,

    scale: 1.72

});


    /* MOBILE ENTRANCE */

    gsap.from(
        coffee,
        {

            opacity: 0,

            scale: 0.65,

            rotation: -8,

            duration: 1.1,

            delay: 0.2,

            ease: "power3.out"

        }
    );


    /* MOBILE JOURNEY */

    const mobileJourney =
        gsap.timeline({

            scrollTrigger: {

                trigger: hero,

                start: "top top",

                endTrigger: cta,

                end: "top top",

                scrub: 1.4,

                invalidateOnRefresh: true

            }

        });


    /* ======================================
       HERO

       Small movement on right
    ====================================== */

   mobileJourney.to(
    coffee,
    {

        x: "30vw",

        y: "32vh",

        rotation: 5,

        scale: 0.82,

        duration: 1

    }
);


    /* ======================================
       HERO → STORY

       Move DOWN slightly

       Do NOT move aggressively
       left/right on mobile.
    ====================================== */

  mobileJourney.to(
    coffee,
    {

        x: "23vw",

        y: "25vh",

        rotation: 2,

        scale: 0.95,

        duration: 1.6,

        ease: "none"

    }
);


    /* ======================================
       STORY → BLEND

       Move slightly right
       and tilt left
    ====================================== */

    mobileJourney.to(
        coffee,
        {

            x: "28vw",

            y: "18vh",

            rotation: -7,

            scale: 0.9,

            duration: 1.6,

            ease: "none"

        }
    );

/* BLEND → COLLECTION */

mobileJourney.to(
    coffee,
    {

        x: "0vw",

        y: "20vh",

        rotation: 0,

        scale: 0.95,

        duration: 1.6,

        ease: "power2.inOut"

    }
);


/* COLLECTION HOLD */

mobileJourney.to(
    coffee,
    {

        x: "0vw",

        y: "20vh",

        rotation: 0,

        scale: 1.65,

        duration: 1.2

    }
);

  /* ======================================
   COLLECTION → CTA

   Move coffee toward the LEFT
   and start making it larger.
====================================== */

mobileJourney.to(
    coffee,
    {

        x: "-25vw",

        y: "10vh",

        rotation: -5,

        scale: 1.15,

        duration: 1.7,

        ease: "power2.inOut"

    }
);


/* ======================================
   CTA

   LARGE FINAL COFFEE
====================================== */

mobileJourney.to(
    coffee,
    {

        x: "-28vw",

        y: "8vh",

        rotation: -7,

        scale: 1.45,

        duration: 1,

        ease: "power2.out"

    }
);

});


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