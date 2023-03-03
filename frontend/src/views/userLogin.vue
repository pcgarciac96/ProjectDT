<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <!-- <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-full h-full object-cover"
      /> -->
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Iniciar Sesión
        </h1>

        <div class="mt-6">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              v-model="email"
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

       

          <button
            @click="userLogin()"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Log In
          </button>
        </div>

        <hr class="my-6 border-gray-300 w-full" />

        <p class="mt-8">
          <a @click="$router.push('/Register')" class="text-blue-500 hover:text-blue-700 font-semibold"
            >Crear una cuenta</a
          >
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import { login } from "../services/userService";
import router from "../router";
import { saveToken } from "../services/userAuthService.js";
export default {
  setup() {
    const email = ref("garcuapunk@gmail.com");
    const password = ref("123456");
    const userLogin = () => {
      const user = {
        email: email.value,
        password: password.value,
      };
      login(user)
        .then((res) => {
          saveToken(res.data.accessToken);
          router.push({ name: "Profile" });
        })
        .catch((error) => console.log(error));

    };
    return { userLogin, email, password };
  },
};
</script>