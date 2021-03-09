import { createWebHistory, createRouter } from "vue-router";
import Awal from "@/components/Awal.vue";
import Tentang from "@/components/Tentang.vue";

const routes = [
  {
    path: "/",
    name: "Awal",
    component: Awal,
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: Tentang,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
