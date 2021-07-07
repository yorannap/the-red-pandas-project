/////////////////////////////////////////////
//////////// DEFAULTS AND VARS //////////////
/////////////////////////////////////////////

gsap.defaults({
  ease: "power3.out", 
  duration: 1
});

var i = 0;
var initAnimationActive = "yes";

var subTitle0 = " ";
var subTitle1 = "Introducing";
var subTitle2 = "Interesting Facts";
var subTitle3 = "Threats";
var subTitle4 = "Projects";
var activeSubtitle = subTitle1;
var activeIcon = "#icon-home";

var activeSlide = 0;
var oldSlide = 0;
var slides = document.querySelectorAll(".panel");
var loading = "yes";

var pointClick = document.getElementsByClassName('tl-point');
var oldPointClick = -1;

var slideArrowLeft = document.getElementsByClassName('slide_arrow left');
var slideArrowRight = document.getElementsByClassName('slide_arrow right');

var menuToggle = document.getElementsByClassName('header-icon');
var mainContent = document.getElementById("main-content");
var menuItem = document.getElementsByClassName('menu-item');
var menuActive = "no";

var rotation = window.matchMedia("(orientation: portrait)");

var copyLink = document.getElementById("linkInput");
var copyButton = document.getElementById("linkButton");

var shareBoxExit = document.getElementById("share-exit");
var supportIcon = document.getElementById("icon-support");
var shareBoxOpen = "no";

//////////////////////////////////////
//////////// ANIMATIONS //////////////
//////////////////////////////////////

// moving slides and elements within the slides
var moveFactor = 100 + "vw";
function moveSlides() {
    if ( menuActive === "no" ) {
        moveFactor = -100 * activeSlide + "vw";
        if ( [1,5,8,11].indexOf(activeSlide) > -1 ) { 
            gsap.to( "#non-fixed .shift", { x: moveFactor });
            gsap.to( "#non-fixed .content", { y: 15 + "vh", x: moveFactor });
            gsap.to( "#fixed .content", { y: 15 + "vh" });
            gsap.to( "div.text-box", { y: -5 + "vh" });
        }
        // shift content down for these slides
        else if ( [0,2,3,4,6,7,9,10].indexOf(activeSlide) > -1) {
            gsap.to( "#non-fixed .shift", { x: moveFactor });
            gsap.to( "#non-fixed .content", { y: 35 + "vh", x: moveFactor });
            gsap.to( "#fixed .content", { y: 35 + "vh" });
            gsap.to( "div.text-box", { y: 0 + "vh" });
        }
        switchIcons();
        switchSubtitle();
        moveSun();
    }
}

// switching icons
function switchIcons() {
    oldActiveIcon = activeIcon
    // update activeicon based on activeslide
    if (activeSlide >= 0 && activeSlide < 1) { activeIcon = "#icon-home"; }
    else if (activeSlide >= 1 && activeSlide <= 1) { activeIcon = "#icon-about"; }
    else if (activeSlide >= 2 && activeSlide <= 4) { activeIcon = "#icon-facts"; }
    else if (activeSlide >= 5 && activeSlide <= 5) { activeIcon = "#icon-map"; }
    else if (activeSlide >= 6 && activeSlide <= 7) { activeIcon = "#icon-threats"; }
    else if (activeSlide >= 8 && activeSlide <= 8) { activeIcon = "#icon-timeline"; }
    else if (activeSlide >= 9 && activeSlide <= 10) { activeIcon = "#icon-projects"; }
    else if (activeSlide >= 11 && activeSlide <= 11) { activeIcon = "#icon-thanks"; }
    // check if icon activeicon has changed
    if (oldActiveIcon === activeIcon) {
        return;
    }
    else {
        gsap.to( ".spacer svg", { scale: 0 });
        gsap.to( activeIcon, { scale: 1 });
    }
}

// switching subtitle
function switchSubtitle() {
    oldActiveSubtitle = activeSubtitle
    // update activeSubtitle based on activeSlide
    if (activeSlide >= 0 && activeSlide < 1) { activeSubtitle = subTitle1; }
    else if (activeSlide >= 1 && activeSlide <= 1) { activeSubtitle = subTitle0; }
    else if (activeSlide >= 2 && activeSlide <= 4) { activeSubtitle = subTitle2; }
    else if (activeSlide >= 5 && activeSlide <= 5) { activeSubtitle = subTitle0; }
    else if (activeSlide >= 6 && activeSlide <= 7) { activeSubtitle = subTitle3; }
    else if (activeSlide >= 8 && activeSlide <= 8) { activeSubtitle = subTitle0; }
    else if (activeSlide >= 9 && activeSlide <= 10) { activeSubtitle = subTitle4; }
    else if (activeSlide >= 11 && activeSlide <= 11) { activeSubtitle = subTitle0; }
    // check if icon activeicon has changed
    if (oldActiveSubtitle === activeSubtitle) {
        return;
    }
    else {
        gsap.to("div.underline", { scaleY: -7, duration: 0.25 });
        gsap.to("div.underline", { scaleY: -1, duration: 0.75, delay: 0.25 });
        setTimeout(function(){ 
            document.getElementById("subtitle").innerHTML= activeSubtitle; 
        }, 50);
    }
}

// moving sun
function moveSun() {
    if(activeSlide === 0 || activeSlide === 1 || activeSlide === 3 || activeSlide === 7 || activeSlide === 10) {
        gsap.to( "#sun", { x: 15 + "%", y: 30 + "%", scale: 1, opacity: 1 });
        return;
    }
    else if(activeSlide === 2 || activeSlide === 4 || activeSlide === 6 || activeSlide === 9 || activeSlide === 11) {
        gsap.to( "#sun", { x: -20 + "%", y: -5 + "%", scale: 0.7, opacity: 1 });
        return;
    }
    else if(activeSlide === 5 || activeSlide === 8) {
        gsap.to( "#sun", { x: -20 + "%", y: -5 + "%", scale: 0, opacity: 0 });
        return;
    }
}

// menu toggle
for(let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener("click", animateMenu);
}

function animateMenu() {
    // opening menu
    if ( menuActive === "no" ) {
        gsap.to( "#site-menu", { x: 0 + "%" });
        gsap.to( "#main-content", { x: 26 + "vh" });
        // update vars
        menuActive = "yes";
        mainContent.addEventListener("click", animateMenu );
        supportIcon.removeEventListener("click", shareBoxAnimation);
    }
    // closing menu
    else {
        gsap.to( "#site-menu", { x: -100 + "%" });
        gsap.to( "#main-content", { x: 0 });
       // update vars
        menuActive = "no";
        mainContent.removeEventListener("click", animateMenu );
        supportIcon.addEventListener("click", shareBoxAnimation);
    }   
}

// menu link clicks
for(let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        if ( i === 0 ) { activeSlide = 0; } // Home
        else if ( i === 1 ) { activeSlide = 1; } // About
        else if ( i === 2 ) { activeSlide = 2; } // Facts
        else if ( i === 3 ) { activeSlide = 5; } // Habitat
        else if ( i === 4 ) { activeSlide = 6; } // Threats
        else if ( i === 5 ) { activeSlide = 8; } // Timeline
        else if ( i === 6 ) { activeSlide = 9; } // Projects
        else if ( i === 7 ) { activeSlide = 11; } // Credits
        animateMenu();
        moveSlides();
    })
}

// timeline points
for(let i = 0; i < pointClick.length; i++) {
    pointClick[i].addEventListener("click", function() {
        if ( oldPointClick === i ) { return; }
        else if ( i === 0 ) { activePoint = ".tl-point.one"; }
        else if ( i === 1 ) { activePoint = ".tl-point.two"; }
        else if ( i === 2 ) { activePoint = ".tl-point.three"; }
        else if ( i === 3 ) { activePoint = ".tl-point.four"; }
        else if ( i === 4 ) { activePoint = ".tl-point.five"; }
        else if ( i === 5 ) { activePoint = ".tl-point.six"; }
        oldPointClick = i;
        gsap.to( ".tl-point circle", { scale: 1.0, fill: "#EEBFAF" });
        gsap.to( ".tl-point .tl-data", { opacity: 0 });
        gsap.to( activePoint + " circle", { scale: 1.5, fill: "#855467" });
        gsap.to( activePoint + " .tl-data", { opacity: 1 });
    })
}

////////////////////////////////////
//////////// TRIGGERS //////////////
////////////////////////////////////

// keys

window.onkeydown = checkKey;
function checkKey(e) {
    if (loading === "no") {
        oldSlide = activeSlide;
        e = e || window.event;
        // left or up arrow keys or backspace
        if ( (e.keyCode == '37') || (e.keyCode == '38') || (e.keyCode == '8') ) {
            if ( menuActive === "yes" ) {
                animateMenu();
                return;
            }
            activeSlide = activeSlide - 1;
            // are we at the beginning of the slides?
            activeSlide = activeSlide < 0 ? 0 : activeSlide;
            // are we at the end of the slides?
            activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
            if (oldSlide === activeSlide) {
                return;
            }
            else {
                moveSlides();
            }
        }
        // right or down arrow keys or spacebar
        else if ( (e.keyCode == '39') || (e.keyCode == '40') || (e.keyCode == '32') ) {
            if ( menuActive === "yes" ) {
                animateMenu();
                return;
            }
            activeSlide = activeSlide + 1;
            // are we at the beginning of the slides?
            activeSlide = activeSlide < 0 ? 0 : activeSlide;
            // are we at the end of the slides?
            activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
            if (oldSlide === activeSlide) {
                return;
            }
            else {
                moveSlides();
            }
        }
    }
}

// arrow clicks

// left
for(let i = 0; i < slideArrowLeft.length; i++) {
    slideArrowLeft[i].addEventListener("click", function() {
        if (menuActive === "no") {
            activeSlide = activeSlide - 1;
            moveSlides();
        }
    })
}

// right
for(let i = 0; i < slideArrowRight.length; i++) {
    slideArrowRight[i].addEventListener("click", function() {
        if (menuActive === "no") {
            activeSlide = activeSlide + 1;
            moveSlides();
        }
    })
}

// if page loads in portrait
if(rotation.matches) {  
	rotationAlert();
}

// if page loads in landscape
if(!rotation.matches) {  
    init();
}

// listen for rotation change
rotation.addListener(function(m) {
	if(m.matches) { // change to portrait
		rotationAlert();
	}
    else { // change to landscape
        rotationAlert('hide');
        init();
    }
});

// show and hide rotation alert
function rotationAlert(status) {
    if (status == 'hide') {
        gsap.to("#rotate-alert", { opacity: 0, display:"none" });
        gsap.to(".site-container", { opacity: 100, display:"block" });
    }
    else {
        gsap.to("#rotate-alert", { opacity: 100, display:"block" });
        gsap.to(".site-container", { opacity: 0, display:"none" });
    }
}

// share box listen to clicks
supportIcon.addEventListener("click", shareBoxAnimation);
shareBoxExit.addEventListener("click", shareBoxAnimation);

// animate share box
function shareBoxAnimation() {
    if ( shareBoxOpen === "no" ) {
        gsap.to("#share-box", { y: -50 + "%" });
        gsap.to("#share-backdrop", { opacity: 1 });
        
        shareBoxOpen = "yes";
        menuActive = "yes";
        
        mainContent.addEventListener("click", shareBoxAnimation );
        menuToggle[i].removeEventListener("click", animateMenu);
    }
    else {
        gsap.to("#share-box", { y: -275 + "%" });
        gsap.to("#share-backdrop", { opacity: 0 });
        
        shareBoxOpen = "no";
        menuActive = "no";
        
        mainContent.removeEventListener("click", shareBoxAnimation );
        for(let i = 0; i < menuToggle.length; i++) {
            menuToggle[i].addEventListener("click", animateMenu);
        }
    }
}

// share box copy link
function copyShareLink() {
    /* Select the text field */
    copyLink.select();
    copyLink.setSelectionRange(0, 99999);

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copyButton.innerHTML = "Copied!";
    setTimeout(function(){ 
        copyButton.innerHTML = "Copy Link"; 
    }, 1000);
}

// init animation
function initAnimation() {
    gsap.set(".site-container", { display: "block" });
    
    gsap.set(".tl-point circle", { transformOrigin: 'center' });
    gsap.to( ".tl-point.five circle", { scale: 1.5, fill: "#855467" });
    gsap.to( ".tl-point.five .tl-data", { opacity: 1 });
    
    if ( initAnimationActive === "yes" ) {
        gsap.from( "#non-fixed .shift", { opacity: 0, delay: 1 });
        gsap.from( "#non-fixed .shift", { x: -7 + "%", y: -7 + "%", scale: 0.25, duration: 2, delay: 2, ease: "power4.inOut" });
        gsap.from( "#sun", { scale: 0, delay: 3 });

        gsap.from( "#non-fixed .content", { x: moveFactor, delay: 3 });
        gsap.from( "#fixed .content", { x: moveFactor, delay: 3 });
        gsap.from("header", { y: -140, delay: 3 });
        gsap.from("#icon-home", { scale: 0, delay: 3 });

        setTimeout(function(){ loading = "no"; }, 4000);
    }
    else {
        loading = "no";
    }
}

// animation upon page load
function init() {
    if ( loading === "yes" ) {
        initAnimation();
    }
}

