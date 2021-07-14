import Vuex from 'vuex';
import gsap from 'gsap';
import mainJson from '../static/main.json';

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        preloadEnabled: true,
        loading: true,
        mainJson: mainJson,
        activeSubtitle: "Introducing",
        activeIcon: "#icon-home",
        panels: null,
        activeSlide: 0,
        oldSlide: 0,
        numOfslides: null,
        menuActive: false,
        shareBoxOpen: false,
        rotation: null
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
      initStateValues(state) {
        state.numOfslides = document.querySelectorAll(".panel").length;
        state.panels = document.querySelectorAll('#non-fixed .panel');
        state.rotation = window.matchMedia("(orientation: portrait)")
        gsap.defaults({
          ease: "power3.out", 
          duration: 1
        });
      },
      setOldSlideNum(state) {
        state.oldSlide = state.activeSlide;
      },
      setShareBoxOpen(state, value) {
        state.shareBoxOpen = value
      },
      setMenuActive(state, value) {
        state.menuActive = value
      },
      setActiveIcon(state, value) {
        state.activeIcon = value
      },
      setActiveSubtitle(state, value) {
        state.activeSubtitle = value
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
            context.dispatch('animateMenu');
            return;
          }
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
        if (
        (context.state.menuActive === false) && 
        (context.state.oldSlide !== context.state.activeSlide) &&
        (context.state.loading === false)) {
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
          // animate arrows
          let panelEl = context.state.panels[context.state.activeSlide]
          let panelArrows = panelEl.querySelector('.slide-arrows')
          gsap.to('.slide-arrows', { opacity: 0 });
          gsap.fromTo(panelArrows, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, delay: 0.65});
          //dispatch other actions
          context.dispatch('switchIcons');
          context.dispatch('switchSubtitle');
          context.dispatch('moveSun');
        }
      },
      switchIcons(context) {
        let activeSlide = context.state.activeSlide;
        let oldActiveIcon = context.state.activeIcon;
        // update activeicon based on activeslide
        if (activeSlide >= 0 && activeSlide < 1) {context.commit('setActiveIcon', '#icon-home')}
        else if (activeSlide >= 1 && activeSlide <= 1) {context.commit('setActiveIcon', '#icon-about')}
        else if (activeSlide >= 2 && activeSlide <= 4) {context.commit('setActiveIcon', '#icon-facts')}
        else if (activeSlide >= 5 && activeSlide <= 5) {context.commit('setActiveIcon', '#icon-map')}
        else if (activeSlide >= 6 && activeSlide <= 7) {context.commit('setActiveIcon', '#icon-threats')}
        else if (activeSlide >= 8 && activeSlide <= 8) {context.commit('setActiveIcon', '#icon-timeline')}
        else if (activeSlide >= 9 && activeSlide <= 10) {context.commit('setActiveIcon', '#icon-projects')}
        else if (activeSlide >= 11 && activeSlide <= 11) {context.commit('setActiveIcon', '#icon-thanks')}
        // check if icon activeicon has changed
        if (oldActiveIcon === context.state.activeIcon) {
          return;
        }
        else {
          gsap.to('#fixed .spacer object', { scale: 0 });
          gsap.to('#fixed .spacer ' + context.state.activeIcon, { scale: 1 });
        }
      },
      switchSubtitle(context) {
        let activeSlide = context.state.activeSlide;
        let oldActiveSubtitle = context.state.activeSubtitle;
        // update activeSubtitle based on activeSlide
        if (activeSlide >= 0 && activeSlide < 1) {context.commit('setActiveSubtitle', 'Introducing')}
        else if (activeSlide >= 1 && activeSlide <= 1) {context.commit('setActiveSubtitle', ' ')}
        else if (activeSlide >= 2 && activeSlide <= 4) {context.commit('setActiveSubtitle', 'Interesting Facts')}
        else if (activeSlide >= 5 && activeSlide <= 5) {context.commit('setActiveSubtitle', ' ')}
        else if (activeSlide >= 6 && activeSlide <= 7) {context.commit('setActiveSubtitle', 'Threats')}
        else if (activeSlide >= 8 && activeSlide <= 8) {context.commit('setActiveSubtitle', ' ')}
        else if (activeSlide >= 9 && activeSlide <= 10) {context.commit('setActiveSubtitle', 'Projects')}
        else if (activeSlide >= 11 && activeSlide <= 11) {context.commit('setActiveSubtitle', ' ')}
        // check if icon activeicon has changed
        if (oldActiveSubtitle === context.state.activeSubtitle) {
          return;
        }
        else {
          gsap.to("div.underline", { scaleY: -7, duration: 0.3 });
          gsap.to("div.underline", { scaleY: -1, duration: 0.7, delay: 0.25 });
          setTimeout(function(){ 
            document.getElementById("subtitle").innerHTML= context.state.activeSubtitle; 
          }, 30);
        }
      },
      moveSun(context) {
        let activeSlide = context.state.activeSlide
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
      },
      rotationAlert(context) {
        let portrait = context.state.rotation.matches
        //console.log(context.state.rotation)
        if (portrait) {
          gsap.to("#rotate-alert", { opacity: 100, display:"block" });
          gsap.to(".site-container", { opacity: 0, display:"none" });
        }
        else {
          gsap.to("#rotate-alert", { opacity: 0, display:"none" });
          gsap.to(".site-container", { opacity: 100, display:"block" });
        }
      },
      mainContentClick(context) {
        if ( context.state.menuActive === true ) {
          context.dispatch('animateMenu')
        }
        if ( context.state.shareBoxOpen === true ) {
          context.dispatch('animateShareBox')
        }
      },
      animateMenu(context) {
        let slides = document.querySelector('#non-fixed');
        // opening menu
        if ( context.state.menuActive === false ) {
          slides.style.pointerEvents = 'none';
          gsap.to( "#site-menu", { x: 0 + "%" });
          gsap.to( "#main-content", { x: 26 + "vh" });
          context.commit('setMenuActive', true);
        }
        // closing menu
        else {
          slides.style.pointerEvents = 'auto';
          gsap.to( "#site-menu", { x: -100 + "%" });
          gsap.to( "#main-content", { x: 0 });
          context.commit('setMenuActive', false);
        }  
      },
      menuItemClicked(context, slide) {
        context.commit('setActiveSlide', slide);
        context.dispatch('animateMenu');
        context.dispatch('moveSlides');
      },
      animateShareBox(context) {
        let appEl = document.querySelector('#app');
        // open share box
        if ( context.state.shareBoxOpen === false && context.state.menuActive === false ) {
          appEl.style.pointerEvents = 'none';
          context.commit('setShareBoxOpen', true)
          gsap.to("#share-box", { y: -50 + "%" });
          gsap.to("#share-backdrop", { opacity: 1 });
        }
        // close share box
        else {
          appEl.style.pointerEvents = 'auto';
          context.commit('setShareBoxOpen', false)
          gsap.to("#share-box", { y: -275 + "%" });
          gsap.to("#share-backdrop", { opacity: 0 });
        }
      },
      preloadAnimation(context) {
        if ( context.state.preloadEnabled === true ) {
          gsap.from( "#non-fixed .shift", { opacity: 0, delay: 1 });
          gsap.from( "#non-fixed .shift", { x: -7 + "%", y: -7 + "%", scale: 0.25, duration: 2, delay: 2, ease: "power4.inOut" });
          gsap.from( "#sun", { scale: 0, delay: 3 });
  
          gsap.from( "#non-fixed .content", { x: 100 + "vw", delay: 3 });
          gsap.from( "#fixed .content", { x: 100 + "vw", delay: 3 });
          gsap.from("header", { y: -140, delay: 3 });
          gsap.from("#icon-home", { scale: 0, delay: 3 });
  
          setTimeout(function(){ context.state.loading = false; }, 4000);
        }
        else {
          context.state.loading = false;
        }
      },
      init(context) {
        context.commit('initStateValues');
        context.dispatch('rotationAlert');
        // trigger preload animation
        context.dispatch('preloadAnimation');
        // listen for keyboard events
        document.addEventListener('keydown', (event) => { context.dispatch('triggerKeydown', event) })
        // listen to rotation change
        context.state.rotation.addEventListener('change', () => { context.dispatch('rotationAlert') })
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