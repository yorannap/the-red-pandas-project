<template>
  <div id="rotate-alert">
      <div id="rotate-box">
        <img :src="$store.getters.mainJson.graphics.iconRotate" alt="Rotate device">
        <h3>Please rotate</h3>
        <p>This website can only be viewed in landscape mode.</p>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>