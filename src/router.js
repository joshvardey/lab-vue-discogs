import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ArtistPage from "./views/ArtistPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/artist",
      name: "Artist Page",
      component: ArtistPage
    }
  ]
});
