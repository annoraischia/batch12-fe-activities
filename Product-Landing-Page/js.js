const sliders = document.querySelectorAll(".slide-in");

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
});