<template>
  <div
    class="portfolio-project"
    @mouseover="currentImage = this.portfolioProject.gif"
    @mouseleave="currentImage = this.portfolioProject.img"
  >
    <a :href="this.portfolioProject.link"
      ><img :src="require(`@/assets/img/${currentImage}`)"
    /></a>
    <h2>{{ this.portfolioProject.name }}</h2>
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
h2 {
  margin: 10px;
}

.portfolio-project {
  align-items: center;
  background-color: var(--darker-color);
  color: #ffffff;

  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* width: 300px; */
}
img {
  width: 100%;
}
</style>
