const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"

};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
    if (!entry.isIntersecting) {  /*if it is intersecting with page, do nothing*/
        return;
    }   else      {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
    }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
