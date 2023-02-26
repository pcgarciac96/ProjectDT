import { createStore } from "vuex";
import router from "../router/index";
import decode from "jwt-decode";
import sign from "jwt-encode";
const secret = "secret-api";

const store = createStore({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRefreshToken(state, refreshtoken) {
      state.refreshToken = refreshtoken;
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    saveToken({ commit }, token) {
      const jwt = sign(token, secret);
      commit("setToken", token.access_token);
      commit("setUser", token.user);
      localStorage.setItem("token", jwt);
    },
    saveRefreshToken({ commit }, refreshtoken) {
      commit("setRefreshToken", refreshtoken);
      localStorage.setItem("refreshToken", refreshtoken);
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");
      let refreshtoken = localStorage.getItem("refreshtoken");
      if (token) {
        const decodeToken = decode(token);
        commit("setRefreshToken", refreshtoken);
        commit("setToken", decodeToken.access_token);
        commit("setUser", decodeToken.user);
      }
    },

    signOff({ commit }) {
      commit("setToken", null);
      commit("setUser", null);
      commit("setRefreshToken", null);
      localStorage.removeItem("token");
      router.push({
        name: "Login",
      });
    },
  },
});

export default store;
