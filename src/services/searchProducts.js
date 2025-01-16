import axios from 'axios';

const BASE_URL = 'https://search.unbxd.io/7615ffb6e3e55bd1e0878257222a6eba/ss-unbxd-gcp-kits-ca-prod16621689373059/autosuggest?popularProducts.filter';


https://search.unbxd.io/7615ffb6e3e55bd1e0878257222a6eba/ss-unbxd-gcp-kits-ca-prod16621689373059/autosuggest?popularProducts.filter=v_soldout_uFilter:%20%220%22&popularProducts.filter=v_enabled_uFilter:%20%221%22&q=kits&version=V2&popularProducts.count=7&variants.relevant=true&keywordSuggestions.count=4&topQueries.count=4

export async function fetchSearchResults(query) {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}

export default fetchSearchResults();