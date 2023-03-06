<template>
  <div class="h-full bg-gray-200 p-8">
    <div class="bg-white rounded-lg shadow-xl pb-8">
   
      <div class="w-full h-[250px]">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
          class="w-full h-full rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div class="flex flex-col items-center -mt-20">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
          class="w-40 border-4 border-white rounded-full"
        />
        <div class="flex items-center space-x-2 mt-2">
          <p class="text-2xl">{{dataUser.name}} {{dataUser.lastname}}</p>
          <span class="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      
    </div>

    <div
      class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4"
    >
      <div class="w-full flex flex-col 2xl:w-1/3">
        <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 class="text-xl text-gray-900 font-bold">Información Personal</h4>
          <ul class="mt-2 text-gray-700">
            <li class="flex border-y py-2">
              <span class="font-bold w-24">Nombre:</span>
              <span class="text-gray-700">{{dataUser.name}} {{dataUser.lastname}}</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Correo:</span>
              <span class="text-gray-700">{{dataUser.email}} </span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Descripción:</span>
              <span class="text-gray-700">{{dataUser.description}} </span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Teléfono:</span>
              <span class="text-gray-700">{{dataUser.phone}} </span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    <pokemonList />
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import pokemonList from "../components/pokemon/pokemonList";
import {getUser} from "../services/userService";
import store from "../store/index";

export default {
  components:{
    pokemonList
  },
  setup() {
    let dataUser = ref({});
    onMounted(() => {
      getDataUser();
      getDataPokemon();
    });

    async function getDataUser() {
      let id = store.state.user.id;
      getUser(id)       
      .then((res) => {
        dataUser.value= res.data
          console.log(res.data);
          // saveToken(res.data.accessToken);
        })
        .catch((error) => console.log(error));
      console.log();
    }
    async function getDataPokemon() {
      
    }

    return { getDataUser, getDataPokemon, pokemonList, dataUser};
  },
};
</script>
