<template>
  <div id="tablecases">
    <p>Population: <ICountUp :endVal="parseInt(total)" /></p>
    <div class="tablecases__container table-container">
      <table class="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr ref="tablecase" v-for="cases in casesbycountry" :key="cases.iso2">
            <td>
              <p class="shrink">
                <img
                  :src="cases.countryInfo.flag"
                  :alt="cases.countryInfo.iso2"
                />
                {{ cases.country }}
              </p>
            </td>
            <td>{{ cases.cases }}</td>
            <td>{{ cases.recovered }}</td>
            <td>{{ cases.deaths }}</td>
            <td>{{ cases.active }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "tablecases",
  props: ["casesbycountry", "total"],
  components: {
    ICountUp,
  },
};
</script>
