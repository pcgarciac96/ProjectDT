<template>
  <div class="justify-center min-h-screen">
    <div class="px-20">
      <label for="UserEmail" class="sr-only"> Email </label>

      <input
        @keyup="getPokemon()"
        v-model="pokemonID"
        type="pokemonID"
        id="pokemonID"
        placeholder="chad@rhcp.com"
        class="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
      />

      

      <div v-if="pokemons.length == 0">
        nada para ver, digite el id del pokemon que desea encontrar
      </div>

      <div v-else class="mt-2 md:p-0 p-5">
        <a
        @click="addPokemon()"
          class="h-60 w-60 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          ></span>
          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {{ pokemons.data.forms[0].name }}
              </h3>

            
              <img
                alt="PokemonPhoto"
                :src="pokemons.data.sprites.front_default"
                class="h-60 w-60 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- <div class="grid grid-cols-4 gap-0.5 mt-2 md:p-0 p-5">
      <div
        v-for="(pokemon, i) in  pokemons " :key = i
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { ref } from "vue";
import { getPokemonList } from "../../services/pokemonService";

export default {
  setup() {
    const pokemonID = ref("");
    let pokemons = ref([]);


    async function getPokemon() {
      console.log(pokemonID.value);
      let id = pokemonID.value;
      console.log(id);
      getPokemonList(id)
        .then((res) => {
          console.log(res);
          pokemons.value = res;
    
        })
        .catch((error) => console.log(error));
    }
    async function addPokemon(){
        console.log("hola");
    }
    return { getPokemon, pokemons, pokemonID, addPokemon };
  },
};
</script>
