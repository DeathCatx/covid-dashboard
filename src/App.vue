<template>
  <div id="app">
    <header class="intro">
      <h1 class="intro__title">
        <div class="logo">
          <p>🌎</p>
        </div>
        <p>COVID-19 Dashboard</p>
        <p class="intro__tagline">
          Keep your mask on and stay safe, we're in this together
        </p>
      </h1>
      <div class="switch-wrapper">
        <span class="icon darkmode"></span>
        <div class="toggle-wrapper">
          <input id="switch" type="checkbox" checked @click="toggle" />
          <label for="switch" id="toggle">Toggle</label>
        </div>
      </div>
      <About />
    </header>

    <router-view :dark="dark" />
  </div>
</template>

<script>
import About from "./components/About.vue";
export default {
  name: "app",
  data: () => ({
    dark: true,
    lastScrollPosition: 0,
  }),
  methods: {
    toggle() {
      if (this.dark) {
        this.dark = false;
        this.setlightMode();
      } else {
        this.dark = true;
        this.setdarkMode();
      }
    },
    setlightMode() {
      document.querySelector("body").classList.add("light-mode");
      this.darkMode = false;
    },
    setdarkMode() {
      document.querySelector("body").classList.remove("light-mode");
      this.darkMode = true;
    },
  },
  components: {
    About,
  },
  metaInfo() {
    return {
      title: "COVID-19 Dashboard",
      meta: [
        {
          name: "description",
          content:
            "Worldwide Tracker of Pandemic Covid-19, with visualization of graph, table, and map",
        },
      ],
    };
  },
};
</script>
