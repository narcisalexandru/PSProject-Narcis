<template>
    <div id="navbar" class="flex w-full align-items-center relative border-bottom-1 gap-8 border-grey-300">
      <div id="logo">
        <img src="/kits_logo.svg" alt="logo" class="h-2rem ml-6 my-4" />
      </div>
      <div class="flex align-items-center justify-content-center w-5">
        <form class="block w-full" @submit.prevent="handleSearch">
            <div class="relative">
                <i class="pi pi-search absolute font-bold text-lg search-icon-position"></i>
                <input 
                type="text" 
                class="p-inputtext w-full pl-5 h-2rem border-none border-1 border-round-2xl border-grey-300" 
                placeholder="Type & Hit Enter.." 
                v-model="searchQuery" 
                @input="handleInput"
                />
                <i @click="clearSearch" class="pi pi-times-circle absolute font-light text-2xl cancel-icon-position"></i>
            </div>
        </form>
      </div>
    </div>
    <!-- Search Results -->
    <div class="w-full absolute" ref="searchResultsRef">
        <div
            v-if="searchResults.length > 0"
            class="bg-red-500 grid p-8 z-5 overflow-scroll overflow-x-hidden"
        >
            <div
                v-for="product in searchResults"
                class="col-3 flex flex-column align-items-center "
            >
                <div class="pt-2 search-results-image" v-if="product.product_group === 'Glasses'">
                    <img class="img-responsive" :src="product.image_tag" />
                </div>
                <div class="pt-2  search-results-image" v-if="product.product_group === 'Accessories' || product.product_group === 'Contact Lenses'">
                    <img class="img-responsive" :src="product.image" />
                </div>
             
                <div>
                    <span class="font-bold" v-if="product.brand_name">
                       aa {{ product.brand_name }}  &nbsp;|
                    </span>
                    <span>
                         {{ product.name }}
                    </span>
                </div>
                <div class="font-bold">
                    ${{ product.price }}
                </div>
            </div>
         </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { fetchSearchResults } from '@/services/searchProducts';
import { useClickOutside } from '@/services/clickOutside';

const searchQuery = ref('');
const searchResults = ref([]);
const searchResultsRef = ref(null);

async function handleInput() {
  const response = await fetchSearchResults(searchQuery.value);
  searchResults.value = response.response.products.filter(product => product.doctype === 'POPULAR_PRODUCTS');
}

async function clearSearch() {
    searchQuery.value = '';
    searchResults.value = [];
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
.img-responsive{
    max-width: 100%;
    height: auto;
}
</style>