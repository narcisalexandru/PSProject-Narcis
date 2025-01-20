import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = 'https://search.unbxd.io/7615ffb6e3e55bd1e0878257222a6eba/ss-unbxd-gcp-kits-ca-prod16621689373059/autosuggest';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchResults: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchSearchResults(query) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: query,
            version: 'V2',
            'popularProducts.count': 7,
            'variants.relevant': true,
            'keywordSuggestion.count': 4,
            'topQueries.count': 4,
          },
        });
        this.searchResults = response.data.response?.products.filter(
            (product) => product.doctype === 'POPULAR_PRODUCTS'
          ) || [];
      } catch (error) {
        console.error('Error fetching search results:', error);
        this.error = 'Failed to fetch search results.';
        this.searchResults = [];
      } finally {
        this.loading = false;
      }
    },
  },
});
