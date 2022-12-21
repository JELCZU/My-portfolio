<template>
  <button class="hamburger">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  <div class="navigation">
    <ul class="navigation_-list">
      <li
        class="menu-element"
        v-for="menuElement in menuElements"
        :key="menuElement.id"
        @click="scroll(menuElement.id)"
      >
        {{ menuElement.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  props: ["menuElements"],
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      window.console.log(document.getElementById(refName));
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
