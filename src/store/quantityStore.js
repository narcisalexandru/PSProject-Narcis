import { defineStore } from "pinia";

export const useQuantityStore = defineStore('quantity', {
    state: () => ({
        selectedQtyL: null,
        selectedQtyR: null,
    }),
    actions: {
        setSelectedQtyL(quantity) {
            this.selectedQtyL = quantity;
        },
        setSelectedQtyR(quantity) {
            this.selectedQtyR = quantity;
        },
    },
});