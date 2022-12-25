<template>
  <div class="navigation">
    <HamburgerMenu :menuElements="this.menuElements" />
  </div>
</template>

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
.navigation {
  background-color: var(--dark-color);
}
</style>
