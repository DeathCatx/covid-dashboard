<template>
  <div id="card-cases">
    <div class="card-cases__container container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="headings">
                <img class="recover" alt="recover" />
                <p class="subtitle is-5">Recovered</p>
              </div>
              <p class="title"><ICountUp :endVal="recovered" /></p>
              <span class="info"
                >(+<ICountUp :endVal="parseInt(todayRecovered)" /> Today)</span
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="headings">
                <img class="death" alt="deaths" />
                <p class="subtitle is-5">Deaths</p>
              </div>
              <p class="title"><ICountUp :endVal="deaths" /></p>
              <span class="info"
                >(+<ICountUp :endVal="parseInt(todayDeaths)" /> Today)</span
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="headings">
                <img class="active" alt="active" />
                <p class="subtitle is-5">Active</p>
              </div>
              <p class="title"><ICountUp :endVal="active" /></p>
              <span class="info">({{ todayActive }} Today)</span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="headings">
                <img class="critical" alt="critical" />
                <p class="subtitle is-5">Critical</p>
              </div>
              <p class="title"><ICountUp :endVal="critical" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "cardcases",
  props: {
    active: Number,
    critical: Number,
    recovered: Number,
    deaths: Number,
    todayCases: Number,
    todayRecovered: Number,
    todayDeaths: Number,
    todayActive: String,
  },
  components: {
    ICountUp,
  },
};
</script>
