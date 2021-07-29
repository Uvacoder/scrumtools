import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "materialize-css/dist/js/materialize.min.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
createApp(App).use(store).mount("#app");
