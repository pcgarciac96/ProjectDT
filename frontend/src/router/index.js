import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import decode from "jwt-decode";
import moment from "moment";
import { autoLogin } from "../helpers/StoreHelper.js";
import { routes } from "./Routes";
const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
router.beforeEach(async (to, from, next) => {
  await autoLogin();
  if (to.path == "/") {
    router.push({ path: "login" });
  }
  window.scrollTo(0, 0);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let localStorageToken = localStorage.getItem("token");
    if (store.state.user && store.state.token && localStorageToken) {
      let token = store.state.token;
      try {
        if (token) {
          let decodeToken = decode(token);
          var time = new Date(decodeToken.exp * 1000);
          let fechaExp = moment(time).format("DD/MM/YYYY HH:mm:ss");
          let fechaActual = moment().format("DD/MM/YYYY HH:mm:ss");
          if (fechaExp <= fechaActual) {
            throw "Token Expirado";
          } else {
            // to.meta.permissions = await getPermissions(to.meta.idModule);
            next();
          }
        }
      } catch (error) {
        console.log(error);
        next({
          path: "/login",
          query: { redirect: to.path },
        });
      }
    } else {
      next({
        path: "/login",
        query: { redirect: to.path },
      });
    }
  } else {
    next();
  }
});
export default router
