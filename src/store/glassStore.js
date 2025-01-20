import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = 'https://search.unbxd.io/7615ffb6e3e55bd1e0878257222a6eba/ss-unbxd-gcp-kits-ca-prod16621689373059/category';

export const useGlassStore = defineStore('glasses', {
    state: () => ({
        glasses: [],
        glassDetails: null, 
        loading: false, 
        error: null, 
    }),
    actions: {
        async fetchGlasses() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(BASE_URL, {
                    params: {
                        p: 'category:Eyeglasses',
                        pagetype: 'boolean',
                        rows: 60,
                        fields: 'v_enabled,features,v_soldout,imageUrl,category,rim_shape,material,ColorImageMapping,product_group,price,v_generic_color,v_a_size,v_b_size,bridge,temple,screw_to_screw,configuration_id,v_configuration_id,v_upc,products_sku,brand_name,image_tag,name,angle_image,v_color,tshirt_size,vto_alt_full,collections_name,discontinued',
                        start: 0,
                        'facet.multiselect': true,
                        version: 'V2',
                        'filter.v_enabled_uFilter': '1',
                        'filter.v_soldout_uFilter': '0',
                        'variants.relevant': true,
                        uid: 'uid-1736781235305-59983',
                    },
                });
                this.glasses = response.data.response?.products || [];
            } catch (error) {
                console.error('Error fetching glasses:', error);
                this.error = 'Failed to fetch glasses';
                this.glasses = [];
            } finally {
                this.loading = false;
            }
        },
        async fetchGlassDetails(configuration_id) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(BASE_URL, {
                    params: {
                        p: `configuration_id:${configuration_id}`,
                        version: 'V2',
                        fields: 'v_enabled,features,v_soldout,imageUrl,category,rim_shape,material,ColorImageMapping,product_group,price,v_generic_color,v_a_size,v_b_size,bridge,temple,screw_to_screw,configuration_id,v_configuration_id,v_upc,products_sku,brand_name,image_tag,name,angle_image,v_color,tshirt_size,vto_alt_full,collections_name,discontinued',
                    },
                });

                const product = response.data.response?.products?.[0];
                if (product) {
                    this.glassDetails = product;
                } else {
                    this.glassDetails = null;
                }

            } catch (error) {
                console.error('Error fetching glass details:', error);
                this.error = 'Failed to fetch glass details';
                this.glassDetails = null;
            } finally {
                this.loading = false;
            }
        },
    },
});
