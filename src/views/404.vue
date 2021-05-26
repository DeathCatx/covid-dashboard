<template>
  <div class="page __not-found">
    <div class="center__me">
      <h1 class="page-header">>404<span class="blink">_</span></h1>
      <div class="page-content">
        <a class="bring__meback" href="/"> Back to homepage.</a>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "404",
  components: {
    SiteFooter
  },
  mounted() {
    this.$ga.page("/404");
  }
};
</script>
