import Feed from "./pages/Feed.vue";
import About from "./pages/About.vue";
export const routes = [
  {
    path: "/about/:sandal",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Feed",
    component: Feed,
  },
];
