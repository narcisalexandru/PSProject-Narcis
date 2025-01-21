<template>
  <div
    id="navbar"
    class="flex w-full align-items-center relative border-bottom-1 gap-8 border-grey-300"
  >
    <div id="logo">
      <img src="/kits_logo.svg" alt="logo" class="h-2rem ml-6 my-4" />
    </div>
    <div class="flex align-items-center justify-content-center w-5">
      <form class="block w-full" @submit.prevent="handleSearch">
        <div class="relative">
          <i
            class="pi pi-search absolute font-bold text-lg search-icon-position"
          ></i>
          <input
            type="text"
            class="p-inputtext w-full pl-5 h-2rem border-none border-1 border-round-2xl border-grey-300"
            placeholder="Type & Hit Enter.."
            v-model="searchStore.searchQuery"
            @input="handleInput"
          />
          <i
            @click="clearSearch"
            class="pi pi-times-circle absolute font-light text-2xl cancel-icon-position"
          ></i>
        </div>
      </form>
    </div>
  </div>
  <!-- Search Results -->

  <div class="w-full absolute" ref="searchResultsRef">
    <div
      v-if="searchStore.searchResults.length > 0"
      class="bg-white grid p-8 z-5 overflow-scroll overflow-x-hidden"
    >
      <div
        v-for="product in searchStore.searchResults"
        :key="product.id"
        class="col-3 flex flex-column align-items-center"
      >
        <div
          class="pt-2 search-results-image"
          v-if="product.product_group === 'Glasses'"
        >
          <img class="img-responsive" :src="product.image_tag" />
        </div>
        <div
          class="pt-2 search-results-image"
          v-if="
            ['Accessories', 'Contact Lenses'].includes(product.product_group)
          "
        >
          <img class="img-responsive" :src="product.image" />
        </div>
        <div>
          <span class="font-bold" v-if="product.brand_name">
            {{ product.brand_name }} &nbsp;|
          </span>
          <span>{{ product.name }}</span>
        </div>
        <div class="font-bold">${{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/store/searchProducts";
import { useClickOutside } from "@/services/clickOutside";

const searchStore = useSearchStore();
const searchResultsRef = ref(null);

function handleInput() {
  if (searchStore.searchQuery.trim()) {
    searchStore.fetchSearchResults(searchStore.searchQuery);
  } else {
    clearSearch();
  }
}

function clearSearch() {
  searchStore.searchQuery = "";
  searchStore.searchResults = [];
}

useClickOutside(searchResultsRef, clearSearch);
</script>

<style>
.search-icon-position {
  left: 10px;
  top: 6px;
}
.cancel-icon-position {
  right: 7px;
  top: 4px;
}
.search-results-image {
  max-width: 320px;
}
.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
