<template>
  <div class="panel about">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-5">
        <object :data="mainJson.about.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.about.title }}</h1>
        <p>{{ mainJson.about.content1 }}</p>
        <p>{{ mainJson.about.content2 }}</p>
        <p>{{ mainJson.about.content3 }}</p>
        <p>{{ mainJson.about.content4 }}</p>
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