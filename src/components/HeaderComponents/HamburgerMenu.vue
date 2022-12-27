<template>
  <div class="navigation" :class="{ 'navigation-show': !this.displayMenu }">
    <ul class="navigation-list">
      <li
        class="menu-element"
        v-for="menuElement in menuElements"
        :key="menuElement.id"
      >
        <button
          @click="
            scroll(menuElement.id);
            $emit('menuToggle');
          "
        >
          <h2>{{ menuElement.name }}</h2>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  props: ["menuElements", "displayMenu"],
  data() {
    return {};
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  transform: translateY(-100%);
  width: 100%;
  background-color: var(--darker-color);
}
.navigation-show {
  transform: translateY(0%);
}
.navigation-list {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
li button {
  border-style: none;
  background-color: transparent;
  padding: 20px;
  width: 100%;
}
.navigation {
  transition: transform 0.3s 0.1s ease-in-out;
}

h2 {
  margin: 0%;
}
</style>
