<template>
  <div><PortfolioProject /></div>
</template>

<script>
import PortfolioProject from "./PortfolioProject.vue";

export default {
  name: "PortfolioProjects",
  components: {
    PortfolioProject,
  },
  // props: {
  //   msg: String,
  // },
};
</script>

<style scoped>
* {
  height: 800px;
  background-color: blue;
}
</style>
