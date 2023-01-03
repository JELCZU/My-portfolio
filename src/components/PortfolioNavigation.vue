<template>
  <div>
    <div class="header">
      <button class="logo" @click="scroll('start')">
        <img src="@/assets/img/logo.png" alt="Kamil Jarczak logo" />
      </button>

      <button class="hamburger" @click="menuToggle()">
        <font-awesome-icon
          v-if="this.displayMenu"
          class="font-awesome-icon bars"
          icon="fa-solid fa-bars"
        />
        <font-awesome-icon
          v-if="!this.displayMenu"
          class="font-awesome-icon xmark"
          icon="fa-solid fa-xmark"
        />
      </button>
    </div>
    <HamburgerMenu
      :displayMenu="displayMenu"
      :menuElements="this.menuElements"
      @menuToggle="menuToggle"
    />
  </div>
</template>

<script>
import HamburgerMenu from "./HeaderComponents/HamburgerMenu.vue";

export default {
  name: "App",
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      menuElements: [
        { name: "Start", id: "start" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
      ],
      displayMenu: true,
      isMobile: true,
    };
  },
  methods: {
    menuToggle() {
      this.displayMenu = !this.displayMenu;
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    if (navigator.maxTouchPoints > 0 && navigator.maxTouchPoints !== 256) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
};
</script>

<style>
.bars {
  font-size: 36px;
}
button {
  background-color: transparent;
  border-style: none;
  padding: 0;
  margin: 0;
}
.font-awesome-icon {
  color: #ffffff;
}
.hamburger {
  padding: 0px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
}
.header {
  align-items: center;
  background-color: var(--dark-color);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 5px 20px;
  position: relative;
  width: 100%;
  z-index: 10;
}
.logo,
img {
  height: 100%;
}
.xmark {
  font-size: 47px;
}
</style>
