<template>
  <div
    class="portfolio-project"
    @mouseover="currentImage = this.portfolioProject.gif"
    @mouseleave="currentImage = this.portfolioProject.img"
  >
    <button @click="$emit('displayProjectDetails', index)">
      <img loading="lazy" :src="require(`@/assets/img/${currentImage}`)" />
    </button>
    <button @click="$emit('displayProjectDetails', index)">
      <h2>{{ this.portfolioProject.name }}</h2>
    </button>
  </div>
</template>
<script>
export default {
  name: "PortfolioProjects",
  props: ["portfolioProject", "index"],
  emits: ["displayProjectDetails"],
  data() {
    return {
      currentImage: this.portfolioProject.img,
    };
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
}
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
button {
  margin: 0;
  padding: 0;
  border-style: none;
  border-width: 0;
}
</style>
