<template>
  <div id="non-fixed">
    <slide-home></slide-home>
    <slide-about></slide-about>
    <slide-fact1></slide-fact1>
    <slide-fact2></slide-fact2>
    <slide-fact3></slide-fact3>
    <slide-map></slide-map>
    <slide-threat1></slide-threat1>
    <slide-threat2></slide-threat2>
    <slide-timeline></slide-timeline>
    <slide-project1></slide-project1>
    <slide-project2></slide-project2>
    <slide-credits></slide-credits>
  </div>
</template>

<script>
import SlideHome from '../components/slides/SlideHome.vue'
import SlideAbout from '../components/slides/SlideAbout.vue'
import SlideFact1 from '../components/slides/SlideFact1.vue'
import SlideFact2 from '../components/slides/SlideFact2.vue'
import SlideFact3 from '../components/slides/SlideFact3.vue'
import SlideMap from '../components/slides/SlideMap.vue'
import SlideThreat1 from '../components/slides/SlideThreat1.vue'
import SlideThreat2 from '../components/slides/SlideThreat2.vue'
import SlideTimeline from '../components/slides/SlideTimeline.vue'
import SlideProject1 from '../components/slides/SlideProject1.vue'
import SlideProject2 from '../components/slides/SlideProject2.vue'
import SlideCredits from '../components/slides/SlideCredits.vue'

export default {
  components: {
    SlideHome,
    SlideAbout,
    SlideFact1,
    SlideFact2,
    SlideFact3,
    SlideMap,
    SlideThreat1,
    SlideThreat2,
    SlideTimeline,
    SlideProject1,
    SlideProject2,
    SlideCredits
  }
}
</script>

<style>

</style>