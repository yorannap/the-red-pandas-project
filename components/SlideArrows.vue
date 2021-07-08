<template>
  <div class="slide-arrows">
    <!-- ?php if ( $arrowtype == "left" || $arrowtype == "both" ) { ?-->
    <div v-if="directions === 'left' || directions === 'both'" class="slide_arrow left" @click="moveSlides(-1)">
      <svg viewBox="0 0 13.2 22.3" xmlns="http://www.w3.org/2000/svg">
        <path d="m12.6 18.9-7.8-7.8 7.8-7.8c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-9.2 9.3c-.8.8-.8 2 0 2.8l9.2 9.2c.8.8 2 .8 2.8 0 .8-.8.8-2.1 0-2.9z" />
      </svg>
    </div>
    <!--?php } ?>
    <?php if ( $arrowtype == "right" || $arrowtype == "both" ) { ?-->
    <div v-if="directions === 'right' || directions === 'both'" class="slide_arrow right"  @click="moveSlides(1)">
      <!--?php
                if ( $startarrow == "yes" ) { ? -->
      <p v-if="start === true">Start Now</p>
      <!--?php } ? -->
      <svg viewBox="0 0 13.2 22.3" xmlns="http://www.w3.org/2000/svg">
        <path d="m.6 18.9 7.8-7.8-7.8-7.7c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l9.2 9.2c.8.8.8 2 0 2.8l-9.2 9.2c-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.9z" />
      </svg>
    </div>
    <!--?php } ?-->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    directions: String,
    start: Boolean
  },
  methods: {
    ...mapActions(["moveSlides"]),
  },
}
</script>

<style>
</style>