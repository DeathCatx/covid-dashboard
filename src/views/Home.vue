<template>
  <div class="home">
    <div class="overall">
      <h2 class="overall_cases_title">Total Cases</h2>
      <h3 class="overall_cases"><ICountUp :endVal="parseInt(totalcases)" /></h3>
      <span class="info"
        >(+<ICountUp :endVal="parseInt(todayCases)" /> Today)</span
      >
      <div class="field">
        <div class="control has-icons-left">
          <div class="select is-info">
            <select v-model="bycountry" @change="viewPerCountry()">
              <option selected :value="selectall">All Countries</option>
              <option
                v-for="a in bycountriesN"
                :key="a.countryInfo._id"
                :value="a"
              >
                {{ a.country }}
              </option>
            </select>
            <span class="icon is-left">
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <CardCases
      :active="active"
      :critical="critical"
      :recovered="recovered"
      :deaths="deaths"
      :todayCases="todayCases"
      :todayDeaths="todayDeaths"
      :todayRecovered="todayRecovered"
      :todayActive="todayActive"
    />
    <Map :data="country" :theme="dark" />
    <div id="visual">
      <div class="visual__container container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="content">
                <p class="title">Countries Affected</p>
                <div class="content">
                  <TableCases
                    :casesbycountry="tablecountry"
                    :total="totalpopulation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Cumulative Cases</p>
              <div class="timeline-option">
                <label class="timeline" for="time">Timeline: </label>
                <div class="select">
                  <select name="time" id="bytime" v-model="bytime">
                    <option value="all">All</option>
                    <option selected value="92">3 Months</option>
                    <option value="31">30 Days</option>
                  </select>
                </div>
              </div>
              <div class="content">
                <CumulativeGraph :data="history.timeline" />
              </div>
            </div>
          </div>
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Daily Cases</p>
              <div class="timeline-option">
                <label class="timeline" for="timeDaily">Timeline: </label>
                <div class="select">
                  <select
                    name="timeDaily"
                    id="byDailytime"
                    v-model="byDailytime"
                  >
                    <option value="all">All</option>
                    <option selected value="92">3 Months</option>
                    <option value="31">30 Days</option>
                  </select>
                </div>
              </div>
              <div class="content">
                <DailyCasesGraph :data="history2.timeline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import api from "@/Api";
import CardCases from "@/components/CardCases.vue";
import Map from "@/components/Map.vue";
import TableCases from "@/components/TableCases.vue";
import CumulativeGraph from "@/components/CumulativeGraph.vue";
import DailyCasesGraph from "@/components/DailyCasesGraph.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ICountUp from "vue-countup-v2";

export default {
  name: "Home",
  props: ["dark"],
  data: () => ({
    selectall: {
      countryInfo: {
        iso2: "all",
      },
    },
    all: {},
    bycountries: {},
    bycountriesN: {},
    bycountry: {},
    history: {
      timeline: {},
    },
    history2: {
      timeline: {},
    },
    country: {},
    tablecountry: {},
    bytime: "92",
    byDailytime: "92",
    totalcases: 0,
    totalpopulation: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
    todayActive: "0",
    carddata: {},
    todaydata: {},
  }),
  created() {
    this.getAll();
    this.getCountries();
    this.setdefault();
  },
  methods: {
    async setdefault() {
      this.bycountry = this.selectall;
    },
    async getAll() {
      this.all = await api.getAllCases();
    },
    async getCountries() {
      this.bycountries = await api.getbyCountries();
      this.bycountriesN = await api.getbyCountriesName();
      this.tablecountry = {}; //Pre reset
      this.tablecountry = this.bycountries;
    },
    async viewPerCountry() {
      let iso = this.bycountry.countryInfo.iso2;
      if (iso == "all") {
        this.getAll();
      } else {
        this.all = await api.getByCountry(iso);
      }
    },
    calActive: function (confirmed, recovered, death) {
      this.todayActive = confirmed - recovered - death;
      if (this.todayActive > 0) {
        return "+" + this.todayActive;
      }
      return this.todayActive.toString();
    },
  },
  watch: {
    all: function () {
      this.carddata = this.all;
      this.todaydata = this.all;
      this.totalcases = this.all.cases;
      this.totalpopulation = this.all.population;
      this.active = this.all.active;
      this.critical = this.all.critical;
      this.recovered = this.all.recovered;
      this.deaths = this.all.deaths;
      this.todayCases = this.all.todayCases;
      this.todayDeaths = this.all.todayDeaths;
      this.todayRecovered = this.all.todayRecovered;
      this.todayActive = this.calActive(
        this.all.todayCases,
        this.all.todayRecovered,
        this.all.todayDeaths
      );
    },
    bycountry: async function () {
      let iso = this.bycountry.countryInfo.iso2;
      let time = this.bytime;
      let timeDaily = this.byDailytime;
      if (iso == "all") {
        this.history.timeline = await api.getDailyCases(time);
        this.history2.timeline = await api.getDailyCases(timeDaily);
        this.getAll();
        this.getCountries();
      } else {
        this.history = await api.getDailyCasesByCountry(iso, time);
        this.history2 = await api.getDailyCasesByCountry(iso, timeDaily);
        this.country = await api.getByCountry(iso);
        this.carddata = this.country;
        this.todaydata = this.country;
      }
    },
    bytime: async function () {
      let iso = this.bycountry.countryInfo.iso2;
      let time = this.bytime;
      if (iso == "all") {
        this.history.timeline = await api.getDailyCases(time);
      } else {
        this.history = await api.getDailyCasesByCountry(iso, time);
      }
    },
    byDailytime: async function () {
      let iso = this.bycountry.countryInfo.iso2;
      let timeDaily = this.byDailytime;
      if (iso == "all") {
        this.history2.timeline = await api.getDailyCases(timeDaily);
      } else {
        this.history2 = await api.getDailyCasesByCountry(iso, timeDaily);
      }
    },
  },
  components: {
    CardCases,
    Map,
    TableCases,
    CumulativeGraph,
    DailyCasesGraph,
    SiteFooter,
    ICountUp,
  },
};
</script>
