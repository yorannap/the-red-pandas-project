<template>
  <div class="panel fact-one">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-2">
        <object :data="mainJson.fact1.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.fact1.title }}</h1>
        <p>{{ mainJson.fact1.content }}</p>
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