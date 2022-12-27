<template>
  <div class="container">
    <div>
      <h1>Hi,<br />it's Kamil Jarczak</h1>

      <h2>
        I'm a web developer.<br />Contact me and let's make some great work
        together.
      </h2>

      <div class="linkedin-github-container">
        <a
          href="https://www.linkedin.com/in/kamil-jarczak-8944091b2/"
          target="”_blank”"
          ><font-awesome-icon
            class="font-awesome-icon"
            icon="fa-brands fa-linkedin"
          />
        </a>
        <a href="https://github.com/JELCZU" target="”_blank”">
          <font-awesome-icon
            class="font-awesome-icon"
            icon="fa-brands fa-github"
        /></a>
      </div>
    </div>
    <button @click="scroll('projects')" id="to-my-projects-btn">
      <font-awesome-icon
        class="font-awesome-icon"
        icon="fa-solid fa-chevron-down"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
* {
  color: #ffffff;
  background-color: var(--light-color);
}
#to-my-projects-btn {
  align-items: center;
  border-style: none;
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: fit-content;
}

#to-my-projects-btn :hover > {
  color: red;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-around;
  align-items: center;
}

h1 {
  text-align: center;
}
h2 {
  text-align: center;
  padding: 20px 0px;
}
.font-awesome-icon {
  font-size: 46px;
}
#to-my-projects-btn .font-awesome-icon {
  position: relative;
  animation-name: moveArrow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  font-size: 126px;
}
@keyframes moveArrow {
  0% {
    top: 0px;
  }
  50% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}
</style>
