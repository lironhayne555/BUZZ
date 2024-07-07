import Feed from "./pages/Feed.vue";
import About from "./pages/About.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
export const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];
