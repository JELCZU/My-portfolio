<template>
  <div>
    <div class="navigation"><PortfolioNavigation /></div>
    <div class="content">
      <PortfolioBody
        :portfolioProjects="portfolioProjects"
        @display-project-details="displayProjectDetails"
      />
    </div>
    <div class="footer"><PortfolioFooter /></div>
    <div v-if="projectDetails.display" class="project-details">
      <PortfolioProjectDetails
        :portfolioProject="
          this.portfolioProjects[this.projectDetails.projectIndex]
        "
        @hideProjectDetails="hideProjectDetails"
      />
    </div>
  </div>
</template>

<script>
import PortfolioNavigation from "./components/PortfolioNavigation.vue";
import PortfolioBody from "./components/PortfolioBody.vue";
import PortfolioFooter from "./components/PortfolioFooter.vue";
import PortfolioProjectDetails from "./components/PortfolioBody/PortfolioProjectDetails.vue";

export default {
  name: "App",
  components: {
    PortfolioNavigation,
    PortfolioBody,
    PortfolioFooter,
    PortfolioProjectDetails,
  },
  data() {
    return {
      portfolioProjects: [
        {
          name: "Catch the fruit",
          description:
            "Catch the fruit is game developed using HTML+CSS+JavaScript. Goal of the game is to catch falling fruits.",
          link: {
            demo: "https://jelczu.github.io/Catch-The-Fruit/",
            src: "https://github.com/JELCZU/Catch-The-Fruit",
          },
          img: "catch-the-fruit.png",
          gif: "catch-the-fruit.gif",
        },
        {
          name: "Crypto currency",
          description:
            "Crypto currency is app developed by using Vue framework. This app let you check your crypto wallet and track your crypto wallet balance changes. In this app you can also check price of crypto currency and buy or sell it.",
          link: { demo: "", src: "https://github.com/JELCZU/crypto-currency" },
          img: "crypto-currency.png",
          gif: "crypto-currency.gif",
        },
        {
          name: "Bike shop",
          description:
            "This app is frontend of bike shop and is developed using Angular framework. This bike shop let you scroll through various products and add them to your cart.",
          link: { demo: "", src: "https://github.com/JELCZU/Bike-shop" },
          img: "bike-shop.png",
          gif: "bike-shop.gif",
        },
      ],
      projectDetails: {
        display: false,
        projectIndex: 0,
      },
    };
  },
  methods: {
    displayProjectDetails(index) {
      this.projectDetails.projectIndex = index;
      this.projectDetails.display = true;
    },
    hideProjectDetails() {
      this.projectDetails.display = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
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
button {
  cursor: pointer;
}
.container {
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
.project-details,
.navigation {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
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
