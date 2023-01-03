<template>
  <div id="start"><PortfolioStart /></div>
  <div id="projects">
    <PortfolioProjects
      :portfolioProjects="portfolioProjects"
      @display-project-details="displayProjectDetails"
    />
  </div>
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
  props: ["portfolioProjects"],
  emits: ["displayProjectDetails"],
  methods: {
    displayProjectDetails(index) {
      this.$emit("displayProjectDetails", index);
    },
  },
};
</script>

<style scoped>
#start {
  height: 100vh;
}
</style>
