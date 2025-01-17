import axios from 'axios';

const BASE_URL = 'https://search.unbxd.io/7615ffb6e3e55bd1e0878257222a6eba/ss-unbxd-gcp-kits-ca-prod16621689373059/autosuggest';

export async function fetchSearchResults(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        'version': 'V2',
        'popularProducts.count': 7,
        'variants.relevant': true,
        'keywordSuggestion.count': 4,
        'topQueries.count': 4,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}

export default fetchSearchResults;
