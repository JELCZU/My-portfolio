<template>
  <div>
    <img
      :src="myImage"
      onmouseover="window.console.log(this); "
      onmouseout="window.console.log('bbb')"
    />
  </div>
</template>
<!-- onmouseover="this.src='./catch-the-fruit.gif';"
  src="./../../assets/img/Catch-the-fruit/catch-the-fruit.gif"
        onmouseover="this.src='catch-the-fruit.gif'"
      onmouseout="this.src='catch-the-fruit.gif'"
            @mouseover="myImage = otherImage"
       @mouseover=":src='./catch-the-fruit.gif'"
onmouseout="this.src='./catch-the-fruit.png';" -->
<script>
export default {
  name: "PortfolioProjects",
  data() {
    return {
      myImage: "@/assets/img/Catch-the-fruit/catch-the-fruit.png",
      otherImage: "@/assets/img/Catch-the-fruit/catch-the-fruit.png",
    };
  },
};
</script>

<style scoped>
/* * {
  height: 800px;
  background-color: blue;
} */
</style>
