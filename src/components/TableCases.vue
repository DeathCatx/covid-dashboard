<template>
  <div id="tablecases">
    <p>Population: <ICountUp :endVal="parseInt(total)" /></p>
    <div class="tablecases__container table-container">
      <b-table
        :data="Object.keys(casesbycountry).map((key) => casesbycountry[key])"
        :columns="columns"
        :loading="isLoading"
        :mobile-cards="false"
        :hoverable="true"
        :default-sort-direction="sortDirection"
        :sticky-header="true"
        :height="500"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  data: () => ({
    isLoading: true,
    sortDirection: "desc",
    columns: [
      {
        field: "country",
        label: "Country",
        sortable: true,
      },
      {
        field: "cases",
        label: "Total Cases",
        sortable: true,
        numeric: true,
      },
      {
        field: "recovered",
        label: "Recovered",
        sortable: true,
        numeric: true,
      },
      {
        field: "deaths",
        label: "Deaths",
        sortable: true,
        numeric: true,
      },
      {
        field: "active",
        label: "Active",
        sortable: true,
        numeric: true,
      },
    ],
  }),
  mounted() {
    this.isLoading = false;
  },
  name: "tablecases",
  props: ["casesbycountry", "total"],
  components: {
    ICountUp,
  },
  computed: {
    //casesCountry: function() {
    //  return Object.values(this.casesbycountry).map( (key) => ({ cases }) );
    //}
  },
};
</script>
