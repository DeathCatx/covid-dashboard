<template>
  <div class="about-popup">
    <div class="btn-about" @click="showModal = true" title="About">
      <span class="icon icon-info"></span>
    </div>
    <div id="modal" class="modal" :class="showModal == true ? 'is-active' : ''">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-content">
        <div class="box">
          <div class="modal-head">
            <p class="modal-title">About</p>
            <button
              class="delete"
              aria-label="close"
              @click="showModal = false"
            ></button>
          </div>
          <div class="card-content">
            <div class="about__content">
              <p class="title is-1">COVID-19 Dashboard</p>
              <p class="mb-3">
                A PWA compatible Web application for Covid-19 pandemic, with
                visualization of graph, table, and map.
              </p>
              <p class="mb-3">
                Originally made by
                <a :href="original" target="_blank" rel="noopener"
                  >Zekinah Lecaros</a
                >
              </p>
              <p class="mb-3">
                Icons:
                <a
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  target="_blank"
                  rel="noopener"
                  >Flaticon</a
                >
              </p>
              <p class="mb-3">
                API Used:
                <a :href="diseaseapi" target="_blank" rel="noopener"
                  >disease.sh</a
                >
              </p>
              <p class="mb-3">
                Data Source:
                <a :href="jhu" target="_blank" rel="noopener"
                  >Johns Hopkins University</a
                >, and
                <a :href="worldometer" target="_blank" rel="noopener"
                  >Worldometers</a
                >
              </p>
              <p class="mb-3">
                Built with
                <a :href="vuejs" target="_blank" rel="noopener">Vue JS</a>,
                <a :href="bulma" target="_blank" rel="noopener">Bulma</a>,
                <a :href="buefy" target="_blank" rel="noopener">Buefy</a>,
                <a :href="leaftet" target="_blank" rel="noopener">Leaflet</a>,
                <a :href="chart" target="_blank" rel="noopener">Chart</a>, and
                <a :href="countup" target="_blank" rel="noopener">Count Up</a>
              </p>
            </div>
            <div class="about__footer">
              <p class="is-size-7 has-text-centered">
                <strong>
                  Made with ❤️ by
                  <a :href="website" target="_blank" rel="noopener">DeathCatx</a
                  >.</strong
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardcases",
  data: () => ({
    showModal: false,
    vuejs: "https://vuejs.org/",
    bulma: "https://bulma.io/",
    buefy: "https://buefy.org/",
    diseaseapi: "https://github.com/disease-sh/API",
    jhu: "https://github.com/CSSEGISandData/COVID-19",
    worldometer: "https://www.worldometers.info/coronavirus/",
    leaftet: "https://github.com/vue-leaflet/Vue2Leaflet",
    chart: "https://github.com/apertureless/vue-chartjs",
    countup: "https://github.com/xlsdg/vue-countup-v2",
    github: "https://github.com/zekinah/pandemiccovid-19",
    stargazers: "https://github.com/zekinah/pandemiccovid-19/stargazers",
    website: "https://github.com/DeathCatx",
    original: "https://zekinahlecaros.com/",
  }),
};
</script>
