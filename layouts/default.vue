<template>
  <div>
    <header>
      <div class="header-icon">
        <div id="menu-closed" class="menu-icon">
            <svg enable-background="new 0 0 79.1 30.1" viewBox="0 0 79.1 30.1" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#865367" stroke-linecap="round" stroke-width="10" transform="translate(-95.764 -80.749)"><path d="m100.8 85.7h69.1"/><path d="m100.8 105.7h32.9"/></g></svg>
        </div>
      </div>
      <div id="icon-support" @click="$store.dispatch('animateShareBox')">
          <svg xmlns="http://www.w3.org/2000/svg" width="78" height="69" viewBox="0 0 78 69"><path d="M36.744,33.391a2.325,2.325,0,0,0,3.4,0L54.682,18.149a11.064,11.064,0,0,0-.747-15.856,10.146,10.146,0,0,0-14,1.028L38.439,4.882,36.958,3.334a10.134,10.134,0,0,0-14-1.041,11.075,11.075,0,0,0-.747,15.856ZM75.45,43.748a4.418,4.418,0,0,0-5.686,0L57.432,53.612a8.5,8.5,0,0,1-5.339,1.869H36.3a2.136,2.136,0,1,1,0-4.271H46.754a4.444,4.444,0,0,0,4.445-3.55,4.276,4.276,0,0,0-4.218-4.992H25.626a15.709,15.709,0,0,0-9.89,3.51L9.53,51.209H2.136A2.142,2.142,0,0,0,0,53.345V66.158a2.142,2.142,0,0,0,2.136,2.135H49.757A8.552,8.552,0,0,0,55.1,66.425l20.181-16.15A4.269,4.269,0,0,0,75.45,43.748Z" transform="translate(0 0.046)" fill="#855467"/></svg>
      </div>
    </header>
    <div id="site-menu">
        <div class="header-icon">
            <div id="menu-open" class="menu-icon">
                <svg enable-background="new 0 0 79.1 56.7" viewBox="0 0 79.1 56.7" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#865367" stroke-linecap="round" stroke-width="10"><path d="m24.7 13.5 29.6 29.6"/><path d="m54.4 13.5-29.7 29.7"/></g></svg>
            </div>
        </div>
        <p class="menu-item">Home</p>
        <p class="menu-item">About</p>
        <p class="menu-item">Facts</p>
        <p class="menu-item">Habitat</p>
        <p class="menu-item">Threats</p>
        <p class="menu-item">Timeline</p>
        <p class="menu-item">Projects</p>
        <p class="menu-item">Credits</p>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('init');
  }
}
</script>

<style>
</style>
