<template>
  <div class="slide-arrows">
    <div 
      v-if="directions === 'left' || directions === 'both'" class="slide_arrow left" 
      @click="directionalSlideChange(-1)">
      <img :src="this.$store.getters.mainJson.graphics.arrowLeft">
      <p v-if="end === true" class="back-arrow">Back</p>
    </div>
    <div 
      v-if="directions === 'right' || directions === 'both'" class="slide_arrow right"  
      @click="directionalSlideChange(1)">
      <p v-if="start === true">Start Now</p>
      <img :src="this.$store.getters.mainJson.graphics.arrowRight">
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    directions: String,
    start: Boolean,
    end: Boolean
  },
  methods: {
    ...mapActions(["directionalSlideChange"]),
  },
}
</script>

<style>
</style>