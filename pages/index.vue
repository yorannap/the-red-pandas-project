<template>
  <div id="app">
    <div id="main-content">
      <div id="sun" class="wrap-illustration shift sun">
        <object :data="mainJson.graphics.sun" type="image/svg+xml"></object>
      </div>

      <div id="non-fixed">
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

        <div class="panel fact-one">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-2">
              <object :data="mainJson.fact1.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.fact1.title }}</h1>
              <p>{{ mainJson.fact1.content }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel fact-two">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-3">
              <object :data="mainJson.fact2.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.fact2.title }}</h1>
              <p>{{ mainJson.fact2.content }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel fact-three">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-4">
              <object :data="mainJson.fact3.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.fact3.title }}</h1>
              <p>{{ mainJson.fact3.content }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel map">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-map">
              <object :data="mainJson.map.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.map.title }}</h1>
              <div class="map-key">
                <div class="key-circle"></div>
                <div class="key-circle"></div>
              </div>
              <p>{{ mainJson.map.key }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel threat-one">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-hunter">
              <object :data="mainJson.threat1.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.threat1.title }}</h1>
              <p>{{ mainJson.threat1.content }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel threat-two">
          <div class="illustration-container shift">
            <div class="wrap-illustration red-panda-deforestation">
              <object :data="mainJson.threat2.illustration" type="image/svg+xml"></object>
            </div>
          </div>
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.threat2.title }}</h1>
              <p>{{ mainJson.threat2.content }}</p>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
        </div>

        <div class="panel timeline">
          <div class="content wrap">
            <div class="spacer"></div>
            <div class="text-box">
              <h1>{{ mainJson.timeline.title }}</h1>
              <slide-arrows directions="both"></slide-arrows>
            </div>
          </div>
          <div class="wrap tl-wrap shift">
            <div class="spacer"></div>
            <div class="red-panda-timeline">
              <div class="tl-sidetext">
                <h3>{{ mainJson.timeline.sidetext }}</h3>
                <div class="tl-underline"></div>
              </div>
              <div class="tl-grids">
                <div
                  class="tl-grid"
                  v-for="date in mainJson.timeline.dates"
                  :key="date"
                >
                  <p class="tl-year small">{{ date }}</p>
                </div>
              </div>
              <div class="tl-blocks">
                <div
                  v-for="(block, index) in mainJson.timeline.blocks"
                  :key="index"
                  class="tl-block"
                  :class="block.classes"
                >
                  <p>{{ block.title }}</p>
                  <p>{{ block.content }}</p>
                </div>
              </div>
              <div class="tl-line">
                <p class="tl-population small">
                  {{ mainJson.timeline.trendtext }}
                </p>
                <div class="tl-trend"></div>
                <div class="tl-points">
                  <div
                    v-for="point in mainJson.timeline.points"
                    :key="point"
                    class="tl-point one"
                  >
                    <svg><circle r="8" /></svg>
                    <div class="tl-data">
                      <div class="tl-data-tag"></div>
                      <p>{{ point }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <slide-arrows directions="left"></slide-arrows>
            </div>
          </div>
        </div>
      </div>
			
      <div id="fixed">
        <div class="content wrap">
          <div class="spacer">
						<object id="icon-home" :data="mainJson.graphics.iconHome" type="image/svg+xml"></object>
						<object id="icon-facts" :data="mainJson.graphics.iconFacts" type="image/svg+xml"></object>
						<object id="icon-map" :data="mainJson.graphics.iconMap" type="image/svg+xml"></object>
						<object id="icon-about" :data="mainJson.graphics.iconAbout" type="image/svg+xml"></object>
						<object id="icon-timeline" :data="mainJson.graphics.iconTimeline" type="image/svg+xml"></object>
						<object id="icon-projects" :data="mainJson.graphics.iconProjects" type="image/svg+xml"></object>
						<object id="icon-thanks" :data="mainJson.graphics.iconThanks" type="image/svg+xml"></object>
          </div>
          <div class="subtitle">
            <h3 id="subtitle">Introducing</h3>
            <div class="underline"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- TEMP -->
    <div id="rotate-alert">
      <div id="rotate-box">
        <svg viewBox="0 0 96.8 96.8" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m48.4 96.8a48.4 48.4 0 1 1 48.4-48.4 48.4 48.4 0 0 1 -48.4 48.4z"
            fill="#fcf2e8"
          />
          <g
            stroke="#845567"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          >
            <rect
              fill="#eebfaf"
              height="23.93"
              rx="6"
              transform="matrix(.70710678 .70710678 -.70710678 .70710678 52.3 -15)"
              width="42"
              x="23.3"
              y="43.7"
            />
            <path d="m45 25.4c12.5-2.2 22.8 5.1 25.7 15.6" fill="none" />
            <path d="m50.8 19.8-5.8 5.6 5.7 5.8" fill="none" />
          </g>
        </svg>
        <h3>Please rotate</h3>
        <p>This website can only be viewed in landscape mode.</p>
      </div>
    </div>
    <div id="share-popup">
      <div id="share-backdrop"></div>
      <div id="share-box">
        <div id="share-exit" @click="$store.dispatch('animateShareBox')">
          <img :src="mainJson.graphics.iconMenuOpen">
        </div>
        <h2>Support</h2>
        <p>
          Share this project with your friends and family to show your support.
        </p>
        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
          <a class="a2a_button_facebook"></a>
          <a class="a2a_button_linkedin"></a>
          <a class="a2a_button_twitter"></a>
          <a class="a2a_button_whatsapp"></a>
          <a class="a2a_button_google_gmail"></a>
        </div>
        <div id="share-link">
          <input type="text" value="redpandasproject.com" id="linkInput" />
          <button id="linkButton" onclick="copyShareLink()">Copy Link</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import SlideArrows from '../components/SlideArrows.vue'

export default {
  components: {
    SlideArrows,
  },
  computed: {
    ...mapGetters(['mainJson']),
  },
  methods: {
    ...mapActions(['']),
  },
}
</script>

<style>
</style>
