<template>
  <div class="project-details">
    <div class="outer-container">
      <div class="close-btn-container">
        <button>
          <font-awesome-icon
            class="font-awesome-icon xmark"
            icon="fa-solid fa-xmark"
            @click="$emit('hideProjectDetails')"
          />
        </button>
      </div>
      <div class="container">
        <img
          loading="lazy"
          :src="require(`@/assets/img/${this.portfolioProject.gif}`)"
        />
        <h2>{{ this.portfolioProject.name }}</h2>

        <h3>{{ this.portfolioProject.description }}</h3>
        <div class="links">
          <a
            v-bind:class="{ disabled: !this.portfolioProject.link.demo }"
            :href="this.portfolioProject.link.demo"
            ><h3>Demo</h3></a
          >
          <a :href="this.portfolioProject.link.src" .disabled="true"
            ><h3>Code</h3></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProjectDetails",
  props: ["portfolioProject"],
  data() {
    return {};
  },
};
</script>

<style scoped>
a {
  background-color: var(--dark-color);
  text-decoration: none;
  padding: 10px 20px;
  margin: 0;
}
a:hover {
  text-decoration: underline;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
a h3 {
  padding: 0;
  margin: 0;
}
h2 {
  margin: 10px;
  text-align: center;
}
h3 {
  text-align: justify;
}

.close-btn-container {
  align-items: flex-start;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 0px 5px;
}

.container {
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  padding: 20px 10px 10px 10px;
  width: 100%;
}
.disabled {
  background-color: #808080;
  pointer-events: none;
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
}
.links {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-around;
}
.project-details {
  align-items: center;
  background-color: rgba(24, 24, 24, 0.95);
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 40px 10px;
  width: 100%;
}
.outer-container {
  background-color: var(--lighter-color);
  max-height: 100vh;
}
.xmark {
  font-size: 27px;
}
</style>
