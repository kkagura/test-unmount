import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory("/");
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/page1" },
    {
      path: "/page1",
      name: "Page1",
      component: () => import("./views/Page1.vue"),
    },
    {
      path: "/page2",
      name: "Page2",
      component: () => import("./views/Page2.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router).mount("#app");
window.app = app;
