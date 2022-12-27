import { createApp } from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

/* add icons to the library */
library.add(faEnvelope, faBars, faXmark, faGithub, faLinkedin);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
