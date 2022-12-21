<template><HamburgerMenu :menuElements="this.menuElements" /></template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HamburgerMenu from "./HeaderComponents/HamburgerMenu.vue";

export default {
  name: "App",
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      menuElements: [
        { name: "start", id: "start" },
        { name: "projects", id: "projects" },
        { name: "contact", id: "contact" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
