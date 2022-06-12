import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/routes";

//Global Components
import ActionButton from "@/components/ActionButton.component.vue";

const app = createApp(App);
app.use(router);

app.component("app-action-button", ActionButton);

app.mount("#app");