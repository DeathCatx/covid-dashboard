<template>
  <div id="daily-cases chart">
    <apexchart
      ref="chart"
      width="100%"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import api from "@/Api";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "dailycasesgraph",
  props: ["data"],
  data() {
    return {
      dailyCases: [],
      options: {
        chart: {
          id: "daily-cases",
        },
        xaxis: {},
      },
      series: [],
      noData: {
        text: "Loading...",
      },
    };
  },
  async created() {
    this.dailyCases = await api.getDailyCases();
  },
  watch: {
    dailyCases(val) {
      const casesdate = Object.getOwnPropertyNames(val.cases);
      const casestotal = Object.values(val.cases);
      const deathstotal = Object.values(val.deaths);
      const recoveredtotal = Object.values(val.recovered);
      const active = casestotal.map(function (num, idx) {
        return num - deathstotal[idx] - recoveredtotal[idx];
      });
      var casestoday = casestotal.map(function (val, index) {
        const previous = casestotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var deathtoday = deathstotal.map(function (val, index) {
        const previous = deathstotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var recovertoday = recoveredtotal.map(function (val, index) {
        const previous = recoveredtotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var activetoday = active.map(function (val, index) {
        const previous = active[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      this.$refs.chart.updateOptions({
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        tooltip: {
          theme: "dark",
        },
        colors: ["#00a4db", "#ff2323", "#00897B", "#ffba00"],
        legend: {
          fontSize: "14px",
          fontFamily: "Space Mono",
          labels: {
            colors: "#A8B2CD",
          },
        },
        xaxis: {
          type: "datetime",
          categories: casesdate,
          labels: {
            hideOverlappingLabels: true,
            style: {
              colors: "#A8B2CD",
            },
          },
          tickAmount: 10,
        },
        yaxis: {
          labels: {
            style: {
              colors: "#A8B2CD",
            },
          },
        },
      });

      const series = [
        {
          name: "Confirmed",
          data: casestoday,
        },
        {
          name: "Deceased",
          data: deathtoday,
        },
        {
          name: "Recovered",
          data: recovertoday,
        },
        {
          name: "Active",
          data: activetoday,
        },
      ];
      this.$refs.chart.updateSeries(series);
    },
    data(val) {
      const casesdate = Object.getOwnPropertyNames(val.cases);
      const casestotal = Object.values(val.cases);
      const deathstotal = Object.values(val.deaths);
      const recoveredtotal = Object.values(val.recovered);
      const active = casestotal.map(function (num, idx) {
        return num - deathstotal[idx] - recoveredtotal[idx];
      });
      var casestoday = casestotal.map(function (val, index) {
        const previous = casestotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var deathtoday = deathstotal.map(function (val, index) {
        const previous = deathstotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var recovertoday = recoveredtotal.map(function (val, index) {
        const previous = recoveredtotal[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      var activetoday = active.map(function (val, index) {
        const previous = active[index - 1];
        if (!isNaN(previous)) {
          return val - previous;
        } else {
          return NaN;
        }
      });
      this.$refs.chart.updateOptions({
        xaxis: {
          type: "datetime",
          categories: casesdate,
          labels: {
            hideOverlappingLabels: true,
          },
          tickAmount: 10,
        },
      });
      const series = [
        {
          name: "Confirmed",
          data: casestoday,
        },
        {
          name: "Deceased",
          data: deathtoday,
        },
        {
          name: "Recovered",
          data: recovertoday,
        },
        {
          name: "Active",
          data: activetoday,
        },
      ];
      this.$refs.chart.updateSeries(series);
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
