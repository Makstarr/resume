// Scroll function for Chrome, Mozilla and such
function defaultSmoothScroll(whereTo){
    console.log(whereTo)
    whereTo.scrollIntoView({
        behavior: 'smooth'
    });
}

// here links elements or elements with links should be found
const nav = document.querySelector('.menu')
const arrow = document.querySelector(".scroll-down-arrow")

arrow.addEventListener('click', (e) => {
    // only anchor links should be triggered for scroll
    if (e.target.getAttribute("href")[0] == '#'){
        e.preventDefault();
        scrollToSection(e) 
    }
})

nav.addEventListener('click', (e) => {
    // only anchor links should be triggered for scroll
    if (e.target.getAttribute("href")[0] == '#'){
        e.preventDefault();
        scrollToSection(e) 
    }
})

// Scroll function for Safari
function scrollToSection(event) {
    // target element
    const target = document.querySelector(event.target.getAttribute("href"))
    // different layouts have different elements that i want to scroll
    const isThesMobileLayout = target.classList.contains("mobile-scroll") 
    const whatToScroll = isThesMobileLayout ? document.querySelector(".window-frame") : document.querySelector(".main")
    // i'm checking if a browser supports element.scrollIntoView({ behavior: 'smooth'});
    if (supportsSmoothScrolling()) {
        defaultSmoothScroll(target)
        return
    }
    SmoothVerticalScrolling(target, 300, "top", whatToScroll, isThesMobileLayout);
  }

  function supportsSmoothScrolling() {
    const body = document.body;
    const scrollSave = body.style.scrollBehavior;
    body.style.scrollBehavior = 'smooth';
    const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
    body.style.scrollBehavior = scrollSave;
    return hasSmooth;
  };
  // i'm checking a scroll positioon and calling the scroll function
  function SmoothVerticalScrolling(element, time, position, whatToScroll, isThesMobileLayout) {
    var eTop = element.getBoundingClientRect().top;
    // take into account header
    var eAmt = isThesMobileLayout ? (eTop + 80)/ 100 : (eTop - 120) / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(scroller, curTime, eAmt, position, whatToScroll);
      curTime += time / 100;
    }
  }
  // the scroll function
  function scroller(eAmt, position, whatToScroll) {
    if (position == "center" || position == ""){
        whatToScroll.scrollBy(0, eAmt / 2);}
    if (position == "top"){
        whatToScroll.scrollBy(0, eAmt);}
  }