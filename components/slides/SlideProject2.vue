<template>
  <div class="panel project-two">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-project-2">
        <object :data="mainJson.project2.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.project2.title }}</h1>
        <p v-html="mainJson.project2.content"></p>
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