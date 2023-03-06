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
      let id = pokemonID.value;
      getPokemonList(id)
        .then((res) => {
          pokemons.value = res;
        })
        .catch((error) => console.log(error));
    }
    async function addPokemon() {
      console.log("hola");
    }
    return { getPokemon, pokemons, pokemonID, addPokemon };
  },
};
</script>
