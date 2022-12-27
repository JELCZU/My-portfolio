<template>
  <div class="container">
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
        <font-awesome-icon class="font-awesome-icon" icon="fa-brands fa-github"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
* {
  color: #ffffff;
  background-color: var(--light-color);
}

h1 {
  text-align: center;
  margin: 30px 0 10px 0;
}
h2 {
  text-align: center;
  padding: 20px 0px;
}
.font-awesome-icon {
  font-size: 46px;
}
</style>
