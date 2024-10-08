const words = {
    ".firstpage": "lets scroll", 
    ".andyouwill": "and you will", 
    ".geta": "get a", 
    ".huge": "huge", 
    ".watermelon": "watermelon",
    ".emoji": "🍉",
};

let curser = gsap.to('.curser', {opacity: 0, ease:"power2.inOut", repeat: -1});

let masterTl = gsap.timeline();

function scroll(targetElement, word) {
    let tl = gsap.timeline();
    tl.clear();
    tl.to(targetElement, {
        duration: 3, 
        text: word, 
        repeat: -1,
        repeatDelay: 2
    });
    tl.play(); 
}

Object.keys(words).forEach(selector => {
    let section = document.querySelector(selector);
    if (section) { 
        ScrollTrigger.create({
            trigger: section,
            start: "top 20%", 
            // end: "bottom 25%",           
            onEnter: () => {
                let targetElement = section.querySelector('.text'); 
                if (targetElement) {
                    scroll(targetElement, words[selector]); 
                }
                console.log(`we are typing in section: ${selector}`);
            },
            onUpdate: (self) => {
                console.log(`Progress in section ${selector}: ${self.progress}`); 
            }
        });
    }
});
