<template>
  <div class="panel fact-two">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-3">
        <object :data="mainJson.fact2.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.fact2.title }}</h1>
        <p>{{ mainJson.fact2.content }}</p>
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