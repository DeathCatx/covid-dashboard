import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import VueMeta from "vue-meta";
import "./registerServiceWorker";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

require("./assets/css/main.scss");

Vue.use(VueMeta);
Vue.use(Buefy);

Vue.config.productionTip = false;

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
