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
    //showNavbar: true,
    lastScrollPosition: 0
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
    } //,
    //onScroll() {
    //  const currentScrollPosition =
    //    window.pageYOffset || document.documentElement.scrollTop;
    //  if (currentScrollPosition < 0) {
    //    return;
    //  }
    //  // Stop executing this function if the difference between
    //  // current scroll position and last scroll position is less than some offset
    //  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    //    return;
    //  }
    //  this.showNavbar = currentScrollPosition < this.lastScrollPosition;
    //  this.lastScrollPosition = currentScrollPosition;
    //}
  },
  components: {
    //Topwrapper,
    About
  },
  //mounted() {
  //  window.addEventListener("scroll", this.onScroll);
  //},
  //beforeDestroy() {
  //  window.removeEventListener("scroll", this.onScroll);
  //},
  metaInfo() {
    return {
      title: "COVID-19 Dashboard",
      meta: [
        {
          name: "description",
          content:
            "Worldwide Tracker of Pandemic Covid-19, with visualization of graph, table, and map"
        }
      ]
    };
  }
};
</script>
