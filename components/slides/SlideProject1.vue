<template>
  <div class="panel project-one">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-project-1">
        <object :data="mainJson.project1.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.project1.title }}</h1>
        <p v-html="mainJson.project1.content"></p>
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