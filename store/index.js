import Vuex from 'vuex';
import gsap from 'gsap';
import mainJson from '../static/main.json';

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        mainJson: mainJson,

        i: 0,
        initAnimationActive: "yes",

        subTitle0: " ",
        subTitle1: "Introducing",
        subTitle2: "Interesting Facts",
        subTitle3: "Threats",
        subTitle4: "Projects",
        activeSubtitle: "Introducing",
        activeIcon: "#icon-home",

        activeSlide: 0,
        oldSlide: 0,
        slides: null, //document.querySelectorAll(".panel"),
        loading: false,

        pointClick: null, //document.getElementsByClassName('tl-point'),
        oldPointClick: -1,

        //slideArrowLeft: null, //document.getElementsByClassName('slide_arrow left'),
        //slideArrowRight: null, //document.getElementsByClassName('slide_arrow right'),

        menuToggle: null, //document.getElementsByClassName('header-icon'),
        mainContent: null, //document.getElementById("main-content"),
        menuItem: null, //document.getElementsByClassName('menu-item'),
        menuActive: false,

        rotation: null, //window.matchMedia("(orientation: portrait)"),

        copyLink: null, //document.getElementById("linkInput"),
        copyButton: null, //document.getElementById("linkButton"),

        shareBoxExit: null, //document.getElementById("share-exit"),
        supportIcon: null, //document.getElementById("icon-support"),
        shareBoxOpen: "no",
      }
    },
    mutations: {
      incrementActiveSlide(state, value) {
        state.activeSlide += value;
      },
      setActiveSlide(state, value) {
        state.activeSlide = value;
      }
    },
    actions: {
      directionalSlideChange(context, direction) {
        context.commit('incrementActiveSlide', direction);
        context.dispatch('moveSlides')
      },
      triggerKeydown(context, e) {
        if (context.state.loading === false) {
          if ( context.state.menuActive === true ) {
            animateMenu();
            return;
          }
          // left or up arrow keys or backspace
          if ( (e.keyCode == '37') || (e.keyCode == '38') || (e.keyCode == '8') ) {
            context.dispatch('directionalSlideChange', -1)
            /* activeSlide = activeSlide - 1;
            // are we at the beginning of the slides?
            activeSlide = activeSlide < 0 ? 0 : activeSlide;
            // are we at the end of the slides?
            activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
            if (oldSlide === activeSlide) {
              return;
            }
            else {
              moveSlides();
            } */
          }
          // right or down arrow keys or spacebar
          else if ( (e.keyCode == '39') || (e.keyCode == '40') || (e.keyCode == '32') ) {
            context.dispatch('directionalSlideChange', 1)
            /* activeSlide = activeSlide + 1;
            // are we at the beginning of the slides?
            activeSlide = activeSlide < 0 ? 0 : activeSlide;
            // are we at the end of the slides?
            activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
            if (oldSlide === activeSlide) {
              return;
            }
            else {
              moveSlides();
            } */
          }
        }
      },
      moveSlides(context) {
        let moveFactor = 100 + "vw";
        if ( context.state.menuActive === "no" ) {
          moveFactor = -100 * context.state.activeSlide + "vw";
          if ( [1,5,8,11].indexOf(context.state.activeSlide) > -1 ) { 
            gsap.to( "#non-fixed .shift", { x: moveFactor });
            gsap.to( "#non-fixed .content", { y: 15 + "vh", x: moveFactor });
            gsap.to( "#fixed .content", { y: 15 + "vh" });
            gsap.to( "div.text-box", { y: -5 + "vh" });
          }
          // shift content down for these slides
          else if ( [0,2,3,4,6,7,9,10].indexOf(context.state.activeSlide) > -1) {
            gsap.to( "#non-fixed .shift", { x: moveFactor });
            gsap.to( "#non-fixed .content", { y: 35 + "vh", x: moveFactor });
            gsap.to( "#fixed .content", { y: 35 + "vh" });
            gsap.to( "div.text-box", { y: 0 + "vh" });
          }
          //switchIcons();
          //switchSubtitle();
          //moveSun();
        }
      },
      gsapDefaults(context) {
        gsap.defaults({
          ease: "power3.out", 
          duration: 1
        });
      },
      init(context) {
        context.dispatch('gsapDefaults');
        document.addEventListener('keydown', (event) => { context.dispatch('triggerKeydown', event) })
      }
    },
    getters: {
      mainJson(state) {
        return state.mainJson;
      }
    }
  })
}

export default createStore