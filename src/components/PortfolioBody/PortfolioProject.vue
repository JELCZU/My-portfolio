<template>
  <div
    class="portfolio-project"
    @mouseover="currentImage = this.portfolioProject.gif"
    @mouseleave="currentImage = this.portfolioProject.img"
  >
    <img :src="require(`@/assets/img/${currentImage}`)" />
    <h3>{{ this.portfolioProject.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "PortfolioProjects",
  props: ["portfolioProject"],
  data() {
    return {
      currentImage: this.portfolioProject.img,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 10px;
}

.portfolio-project {
  align-items: center;
  background-color: var(--dark-color);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* width: 300px; */
}
img {
  width: 100%;
}
</style>
