<template>
  <div id="start"><PortfolioStart /></div>
  <div id="projects"><PortfolioProjects /></div>
  <div id="contact"><ContactMe /></div>
</template>

<script>
import PortfolioStart from "./PortfolioBody/PortfolioStart.vue";
import PortfolioProjects from "./PortfolioBody/PortfolioProjects.vue";
import ContactMe from "./PortfolioBody/ContactMe.vue";

export default {
  name: "PortfolioBody",
  components: {
    PortfolioStart,
    PortfolioProjects,
    ContactMe,
  },
  // props: {
  //   msg: String,
  // },
};
</script>

<style scoped></style>
