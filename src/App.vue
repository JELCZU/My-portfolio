<template>
  <div>
    <div class="navigation"><PortfolioNavigation /></div>
    <div class="content"><PortfolioBody /></div>
    <div class="footer"><PortfolioFooter /></div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PortfolioNavigation from "./components/PortfolioNavigation.vue";
import PortfolioBody from "./components/PortfolioBody.vue";
import PortfolioFooter from "./components/PortfolioFooter.vue";

export default {
  name: "App",
  components: {
    PortfolioNavigation,
    PortfolioBody,
    PortfolioFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  /* font-family: SF Pro Display, Helvetica, Arial, sans-serif; */
}
body {
  padding: 0;
  margin: 0;
}
.navigation {
  position: sticky;
  top: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
