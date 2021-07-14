<template>
  <div class="panel home">
    <div class="illustration-container shift">
      <div class="wrap-illustration red-panda-1">
        <object :data="mainJson.home.illustration" type="image/svg+xml"></object>
      </div>
    </div>
    <div class="content wrap">
      <div class="spacer"></div>
      <div class="text-box">
        <h1>{{ mainJson.home.title }}</h1>
        <p>{{ mainJson.home.content }}</p>
        <slide-arrows directions="right" :start="true"></slide-arrows>
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