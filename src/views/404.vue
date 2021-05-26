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
<style lang="scss">
body, html {
	height: 100vh;
}
.center__me {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.__not-found .page-header {
  font-size: 160px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.bring__meback {
  transition: all 0.5s ease-in-out;
  font-weight: 400;
  display: inline-block;
  padding: 2px 3px;
  text-decoration: none;
  box-shadow: inset 2px 0 0 #f5f2f4;
}
.bring__meback:hover {
  box-shadow: inset 180px 0 0 0 #f5f2f4;
  color: #1d233c;
}
.__not-found .sitefooter {
  position: absolute;
  bottom: 0;
  right: 0;
}
@media screen and (max-width: 630px) {
  .page {
    padding: 95px 15px;
  }
  .__not-found .page-header {
    font-size: 18vw;
  }
}
</style>