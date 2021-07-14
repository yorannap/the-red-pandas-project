<template>
  <div class="panel threat-one">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-hunter">
        <object :data="mainJson.threat1.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.threat1.title }}</h1>
        <p>{{ mainJson.threat1.content }}</p>
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