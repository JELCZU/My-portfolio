<template>
  <div class="container">
    <h1>My projects</h1>
    <div class="portfolio-projects">
      <PortfolioProject
        v-for="(portfolioProject, index) in this.portfolioProjects"
        :key="portfolioProject.name"
        :portfolioProject="portfolioProject"
        :index="index"
        @display-project-details="displayProjectDetails"
      />
    </div>
  </div>
</template>

<script>
import PortfolioProject from "./PortfolioProject.vue";

export default {
  name: "PortfolioProjects",
  components: {
    PortfolioProject,
  },
  props: ["portfolioProjects"],
  emits: ["displayProjectDetails"],
  data() {
    return {};
  },
  methods: {
    displayProjectDetails(index) {
      this.$emit("displayProjectDetails", index);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: var(--lighter-color);
}
h1 {
  text-align: center;
  margin: 0 0 40px 0;
}
.portfolio-projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
