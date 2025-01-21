import { createRouter, createWebHistory } from "vue-router";
import FlexView from "../views/FlexView.vue";
import GridView from "@/views/GridView.vue";
import HomeView from "@/views/HomeView.vue";
import MedsView from "@/views/MedsView.vue";
import MedsGridView from "@/views/MedsGridView.vue";
import GlassView from "@/views/GlassView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/flex",
      name: "flex",
      component: FlexView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/grid",
      name: "grid",
      component: GridView,
    },
    {
      path: "/meds",
      name: "meds",
      component: MedsView,
    },
    {
      path: "/grid-meds",
      name: "gridMeds",
      component: MedsGridView,
    },
    {
      path: "/glasses",
      name: "glasses",
      component: GlassView,
    },
  ],
});

export default router;
