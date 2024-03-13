import { createApp } from "vue";
import router from "./router/index.js";
import "./style.css";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import CityView from "./views/CityView.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
