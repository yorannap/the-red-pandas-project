<template>
  <div id="fixed">
    <div class="content wrap">
      <div class="spacer">
        <object id="icon-home" :data="mainJson.graphics.iconHome" type="image/svg+xml"></object>
        <object id="icon-facts" :data="mainJson.graphics.iconFacts" type="image/svg+xml"></object>
        <object id="icon-map" :data="mainJson.graphics.iconMap" type="image/svg+xml"></object>
        <object id="icon-threats" :data="mainJson.graphics.iconThreats" type="image/svg+xml"></object>
        <object id="icon-about" :data="mainJson.graphics.iconAbout" type="image/svg+xml"></object>
        <object id="icon-timeline" :data="mainJson.graphics.iconTimeline" type="image/svg+xml"></object>
        <object id="icon-projects" :data="mainJson.graphics.iconProjects" type="image/svg+xml"></object>
        <object id="icon-thanks" :data="mainJson.graphics.iconThanks" type="image/svg+xml"></object>
      </div>
      <div class="subtitle">
        <h3 id="subtitle">Introducing</h3>
        <div class="underline"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['mainJson']),
  }
}
</script>

<style>

</style>