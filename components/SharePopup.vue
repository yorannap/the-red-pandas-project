<template>
  <div id="share-popup">
      <div id="share-backdrop"></div>
      <div id="share-box">
        <div id="share-exit" @click="$store.dispatch('animateShareBox')">
          <img :src="$store.getters.mainJson.graphics.iconMenuOpen">
        </div>
        <h2>Support</h2>
        <p>Share this project with your friends and family to show your support.</p>
        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
          <a class="a2a_button_facebook"></a>
          <a class="a2a_button_linkedin"></a>
          <a class="a2a_button_twitter"></a>
          <a class="a2a_button_whatsapp"></a>
          <a class="a2a_button_google_gmail"></a>
        </div>
        <div id="share-link">
          <input id="linkInput" type="text" value="redpandasproject.com" />
          <button id="linkButton" @click="copyShareLink()">Copy Link</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    copyShareLink() {
      let copyLink = document.getElementById("linkInput");
      let copyButton = document.getElementById("linkButton");
      copyLink.select();
      copyLink.setSelectionRange(0, 99999);
      document.execCommand("copy");
      copyButton.innerHTML = "Copied!";
      setTimeout(() => { 
          copyButton.innerHTML = "Copy Link"; 
      }, 1000);
    }
  },
}
</script>

<style>

</style>