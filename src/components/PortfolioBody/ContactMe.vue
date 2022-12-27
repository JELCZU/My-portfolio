<template>
  <div class="container">
    <h1>Contact me!</h1>
    <div class="contant-forms">
      <div class="email-container">
        <font-awesome-icon
          class="font-awesome-icon"
          icon="fa-solid fa-envelope"
        />
        <h2>
          <a href="mailto:kamilj12@gmail.com">kamilj12@gmail.com</a>
        </h2>
      </div>
      <form
        action="https://formsubmit.io/send/kamilj12@gmail.com"
        method="POST"
      >
        <label for="mail"><h2>Your e-mail</h2></label
        ><input
          id="mail"
          name="mail"
          type="mail"
          placeholder="e-mail"
          required
        />
        <label for="msg"><h2>Enter your message</h2></label
        ><textarea
          id="mail"
          name="msg"
          rows="5"
          placeholder="Enter your message here"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
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
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped>
a {
  color: #ffffff;
}
button {
  cursor: pointer;
  background-color: #777777;
  font-weight: bold;
  margin-top: 10px;
}
.contant-forms {
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
}
.container {
  background-color: var(--light-color);
}
.email-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.font-awesome-icon {
  font-size: 66px;
}
form {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin: 0 0 40px 0;
}
h2 {
  margin: 10px 0 10px 0;
}
input,
textarea,
button {
  border-style: none;
  font-size: 22px;
  padding: 10px;
  color: #ffffff;
}
input,
textarea {
  background-color: var(--darker-color);
  margin-bottom: 10px;
}
</style>
