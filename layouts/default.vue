<template>
  <div>
    <share-popup></share-popup>
    <rotate-box></rotate-box>
    <Nuxt />
  </div>
</template>

<script>
import SharePopup from '../components/SharePopup.vue'
import RotateBox from '../components/RotateBox.vue'

export default {
  components: {
    SharePopup,
    RotateBox,
  },
  mounted() {
    this.$store.dispatch('init');
  }
}
</script>

<style>
</style>
