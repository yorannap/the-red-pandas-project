<template>
  <div class="panel map">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-map">
        <object :data="mainJson.map.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.map.title }}</h1>
        <div class="map-key">
          <div class="key-circle"></div>
          <div class="key-circle"></div>
        </div>
        <p>{{ mainJson.map.key }}</p>
        <slide-arrows directions="both"></slide-arrows>
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