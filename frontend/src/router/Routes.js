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
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/userProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
 
];
