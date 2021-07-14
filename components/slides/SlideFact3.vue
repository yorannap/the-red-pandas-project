<template>
  <div class="panel fact-three">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-4">
        <object :data="mainJson.fact3.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.fact3.title }}</h1>
        <p>{{ mainJson.fact3.content }}</p>
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