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
  font-family: Open Sans, sans-serif;
}
:root {
  --dark-color: #181818;
  --darker-color: #1f1f1f;
  --lighter-color: #252525;
  --light-color: #3c3c3c;
  background-color: var(--light-color);
}
body {
  padding: 0;
  margin: 0;
}
.container {
  /* padding: 50px 20px;
  margin: -10px 0; */
  padding: 50px 20px;
}

h1,
h2,
h3,
h4,
li {
  color: #ffffff;
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 22px;
}
h3 {
  font-size: 18px;
}
.navigation {
  position: fixed;
  width: 100%;
  top: 0;
}
.linkedin-github-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.font-awesome-icon {
  color: #ffffff;
}
</style>
