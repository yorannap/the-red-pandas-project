<template>
  <div class="panel credits">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-6">
        <object :data="mainJson.credits.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.credits.title }}</h1>
        <p>{{ mainJson.credits.content1 }}</p>
        <p v-html="mainJson.credits.content2"></p>
        <p v-html="mainJson.credits.content3"></p>
        <slide-arrows directions="left" :end="true"></slide-arrows>
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