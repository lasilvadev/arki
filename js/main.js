//Scroll to top Button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Splash Screen
let intro = document.querySelector(".intro");
let logo = document.querySelector(".intro-title");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        
        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) *400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (idx + 1) * 70);
            })
        }, 2200);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2500);
    });
})