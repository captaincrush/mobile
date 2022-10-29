import Index from "@/views/first/Index.vue";
import Business from "@/views/first/Business.vue";
const routes = [
  {
    path: "/first/index",
    component: Index,
  },
  {
    path: "/first/business",
    component: Business,
  },
  {
    path: "/first/phonebill",
    component: () => import("@/views/first/Phonebill.vue"),
  },
  {
    path: "/first/flow",
    component: () => import("@/views/first/Flow.vue"),
  },
  {
    path: "/first/city",
    component: () => import("@/views/first/City.vue"),
  },
];

export default routes;
