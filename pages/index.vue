<template>
  <div id="app">
    <header-bar></header-bar>
    <div id="main-content" @click="$store.dispatch('mainContentClick')">
      <the-sun></the-sun>
      <all-slides></all-slides>
      <fixed-elements></fixed-elements>
    </div>
  </div>
</template>

<script>
import SlideArrows from '../components/SlideArrows.vue'
import FixedElements from '../components/FixedElements.vue'
import AllSlides from '../components/AllSlides.vue'
import TheSun from '../components/TheSun.vue'
import HeaderBar from '../components/HeaderBar.vue'

export default {
  components: {
    SlideArrows,
    FixedElements,
    AllSlides,
    TheSun,
    HeaderBar
  }
}
</script>

<style>
</style>
