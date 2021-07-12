import Vuex from 'vuex';
import gsap from 'gsap';
import mainJson from '../static/main.json';

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        mainJson: mainJson,

        //i: 0,
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
        numOfslides: null,
        loading: false,

        pointClick: null, //document.getElementsByClassName('tl-point'),
        oldPointClick: -1,

        // slideArrowLeft: null, //document.getElementsByClassName('slide_arrow left'),
        // slideArrowRight: null, //document.getElementsByClassName('slide_arrow right'),

        menuToggle: null, //document.getElementsByClassName('header-icon'),
        //mainContent: null, //document.getElementById("main-content"),
        menuItem: null, //document.getElementsByClassName('menu-item'),
        menuActive: false,

        rotation: null, //window.matchMedia("(orientation: portrait)"),

        copyLink: null, //document.getElementById("linkInput"),
        copyButton: null, //document.getElementById("linkButton"),

        shareBoxExit: null, //document.getElementById("share-exit"),
        supportIcon: null, //document.getElementById("icon-support"),
        shareBoxOpen: false,
      }
    },
    mutations: {
      incrementActiveSlide(state, value) {
        let newActiveSlide = state.activeSlide + value
        if(newActiveSlide >= 0 && newActiveSlide < state.numOfslides) {
          state.activeSlide = newActiveSlide;
        }
      },
      setActiveSlide(state, value) {
        state.activeSlide = value;
      },
      defineNumOfSlides(state) {
        state.numOfslides = document.querySelectorAll(".panel").length
      },
      setOldSlideNum(state) {
        state.oldSlide = state.activeSlide;
      },
      setShareBoxOpen(state, value) {
        state.shareBoxOpen = value
      }
    },
    actions: {
      directionalSlideChange(context, direction) {
        context.commit('incrementActiveSlide', direction);
        context.dispatch('moveSlides')
      },
      triggerKeydown(context, e) {
        if (context.state.loading === false) {
          /* if ( context.state.menuActive === true ) {
            animateMenu();
            return;
          } */
          // left or up arrow keys or backspace
          if ( (e.keyCode == '37') || (e.keyCode == '38') || (e.keyCode == '8') ) {
            context.dispatch('directionalSlideChange', -1)
          }
          // right or down arrow keys or spacebar
          else if ( (e.keyCode == '39') || (e.keyCode == '40') || (e.keyCode == '32') ) {
            context.dispatch('directionalSlideChange', 1)
          }
        }
      },
      moveSlides(context) {
        // only move if menu isn't active and if slides have actually changed
        if ((context.state.menuActive === false) && (context.state.oldSlide !== context.state.activeSlide)) {
          console.log('activemove')
          context.commit('setOldSlideNum')
          let moveFactor = -100 * context.state.activeSlide + "vw";
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
      animateShareBox(context) {
        let mainContent = document.getElementById("main-content")
        if ( context.state.shareBoxOpen === false ) {
          console.log('opened', mainContent)
          gsap.to("#share-box", { y: -50 + "%" });
          gsap.to("#share-backdrop", { opacity: 1 });
          
          context.commit('setShareBoxOpen', true)
          mainContent.addEventListener("click", retrigger);

          //menuActive = "yes";
          //menuToggle[i].removeEventListener("click", animateMenu);
        }
        else {
          console.log('closed', mainContent)
          gsap.to("#share-box", { y: -275 + "%" });
          gsap.to("#share-backdrop", { opacity: 0 });
          
          context.commit('setShareBoxOpen', false)
          mainContent.removeEventListener("click", retrigger);

          //menuActive = "no";
          /* for(let i = 0; i < menuToggle.length; i++) {
            menuToggle[i].addEventListener("click", animateMenu);
          } */
        }
        function retrigger(event) {
            console.log('triggered', event)
            context.dispatch('animateShareBox')
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
        context.commit('defineNumOfSlides');
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