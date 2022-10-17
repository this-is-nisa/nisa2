const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.7,
    rootMargin: "150px 0px -100px 0px"


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



//fix later -- divider animation
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
const square = entry.target.querySelector('.divider');
  if (entry.isIntersecting) {
  divider.classList.add('wipe-animation');
  return;
  }
  divider.classList.remove('wipe-animation');
   });
});


