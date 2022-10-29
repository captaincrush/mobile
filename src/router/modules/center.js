import Index from "@/views/center/Index.vue";
const routes = [
  {
    path: "/center/index",
    component: Index,
  },
  {
    path: "/center/login",
    component: () => import("@/views/center/Login.vue"),
  },
  {
    path: "/center/email",
    component: () => import("@/views/center/Email.vue"),
  },
];

export default routes;
