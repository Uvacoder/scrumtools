import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { store, key } from "./store/store";
import * as M from "materialize-css";

createApp(App).use(store, key).mount("#app");
M.AutoInit();
