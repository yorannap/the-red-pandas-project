<template>
  <div>
    <header>
      <div class="header-icon" @click="$store.dispatch('animateMenu')">
        <div id="menu-closed" class="menu-icon">
          <img :src="$store.getters.mainJson.graphics.iconMenuClosed">
        </div>
      </div>
      <div id="icon-support" @click="$store.dispatch('animateShareBox')">
        <img :src="$store.getters.mainJson.graphics.iconHeaderSupport">
      </div>
    </header>
    <div id="site-menu">
      <div class="header-icon" @click="$store.dispatch('animateMenu')">
        <div id="menu-open" class="menu-icon">
          <img :src="$store.getters.mainJson.graphics.iconMenuOpen">
        </div>
      </div>
      <p @click="$store.dispatch('menuItemClicked', 0)">Home</p>
      <p @click="$store.dispatch('menuItemClicked', 1)">About</p>
      <p @click="$store.dispatch('menuItemClicked', 2)">Facts</p>
      <p @click="$store.dispatch('menuItemClicked', 5)">Habitat</p>
      <p @click="$store.dispatch('menuItemClicked', 6)">Threats</p>
      <p @click="$store.dispatch('menuItemClicked', 8)">Timeline</p>
      <p @click="$store.dispatch('menuItemClicked', 9)">Projects</p>
      <p @click="$store.dispatch('menuItemClicked', 11)">Credits</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>