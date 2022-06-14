import { createApp, h } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import global from "./composables/global";

const app = createApp({
  provide: {
    global,
  },
  render: () => h(App),
});

app.mount("#app");
