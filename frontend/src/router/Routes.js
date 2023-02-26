export const routes = [
  {
    path: "/",
    name: "start",
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/userLogin.vue"),
    meta: { requiresAuth: false },
  },
 
];
