<template>
  <div class="panel threat-two">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-deforestation">
        <object :data="mainJson.threat2.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.threat2.title }}</h1>
        <p>{{ mainJson.threat2.content }}</p>
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