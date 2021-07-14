<template>
  <div class="panel timeline">
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.timeline.title }}</h1>
        <slide-arrows directions="both"></slide-arrows>
      </div>
    </div>
    <div class="wrap tl-wrap shift">
      <div class="spacer"></div>
      <div class="red-panda-timeline">
        <div class="tl-sidetext">
          <h3>{{ mainJson.timeline.sidetext }}</h3>
          <div class="tl-underline"></div>
        </div>
        <div class="tl-grids">
          <div class="tl-grid" v-for="date in mainJson.timeline.dates" :key="date">
            <p class="tl-year small">{{ date }}</p>
          </div>
        </div>
        <div class="tl-blocks">
          <div v-for="(block, index) in mainJson.timeline.blocks" :key="index" class="tl-block" :class="block.classes">
            <p>{{ block.title }}</p>
            <p>{{ block.content }}</p>
          </div>
        </div>
        <div class="tl-line">
          <p class="tl-population small">{{ mainJson.timeline.trendtext }}</p>
          <div class="tl-trend"></div>
          <div class="tl-points">
            <div v-for="point in mainJson.timeline.points" :key="point" class="tl-point">
              <svg><circle @click="pointClick($event)" r="8" /></svg>
              <div class="tl-data">
                <div class="tl-data-tag"></div>
                <p>{{ point }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from 'gsap';

export default {
  computed: {
    ...mapGetters(['mainJson']),
  },
  methods: {
    pointClick(e) {
      let circle;
      let data;
      console.log(typeof e)
      if(typeof e === 'object') {
        circle = e.target;
        data = e.path[2].querySelector('.tl-data');
      }
      else {
        let point = document.querySelectorAll('.tl-point')[4]
        circle = point.querySelector('circle')
        data = point.querySelector('.tl-data')
      }
      gsap.to( ".tl-point circle", { scale: 1.0, fill: "#EEBFAF", transformOrigin: 'center' });
      gsap.to( ".tl-point .tl-data", { opacity: 0 });
      gsap.to( circle, { scale: 1.5, fill: "#855467" });
      gsap.to( data, { opacity: 1 });
    },
  },
  mounted() {
    this.pointClick();
  },
}
</script>