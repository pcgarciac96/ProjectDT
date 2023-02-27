import axios from "axios";
import url from "@/config/api";
import router from "../router/index";
import { useToken } from "../helpers/StoreHelper";
// import store from "../store/index";
let response = {};

// let headerToken = "";
// const getToken = async () => {
//   headerToken = {
//     headers: {
//       Authorization: "Bearer " + store.state.token,
//     },
//   };
// };
export default {
  async login(body) {
    console.log(body);
    response = await axios
      .post(url.url + "login", body)
      .then(async (response) => {
        await useToken(response.data);
        if (router.currentRoute.value.query.redirect) {
          router.push({
            name: "Profile" 
          });
        } else {
          router.push({ name: "Profile" });
        }
        return response;
      })
      .catch(async (error) => {
        console.log(error);
        return error;
      });
    return response.data;
  },
};
