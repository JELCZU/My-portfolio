<template>
  <div class="container">
    <h1>My projects</h1>
    <div class="portfolio-projects">
      <PortfolioProject
        v-for="portfolioProject in this.portfolioProjects"
        :key="portfolioProject.name"
        :portfolioProject="portfolioProject"
      />
      <!-- <PortfolioProject :portfolioProject="portfolioProjects[0]" />
      <PortfolioProject :portfolioProject="portfolioProjects[1]" />
      <PortfolioProject :portfolioProject="portfolioProjects[2]" /> -->
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
  data() {
    return {
      portfolioProjects: [
        {
          name: `Catch the fruit`,
          link: "https://github.com/JELCZU/Catch-The-Fruit",
          img: `catch-the-fruit.png`,
          gif: `catch-the-fruit.gif`,
        },
        {
          name: `Crypto currency`,
          link: "https://github.com/JELCZU/crypto-currency",
          img: `crypto-currency.png`,
          gif: `crypto-currency.gif`,
        },
        {
          name: `Bike shop`,
          link: "https://github.com/JELCZU/Bike-shop",
          img: `bike-shop.png`,
          gif: `bike-shop.gif`,
        },
      ],
    };
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
  /* align-items: center; */

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  /* padding: 20px 0; */
}
</style>
