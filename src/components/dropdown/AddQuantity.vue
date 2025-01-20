<template>
    <div class="card flex flex-column justify-content-center align-items-center w-full gap-8 mt-8">
        <div class="flex flex-row gap-8 text-center align-items-center">
            <Select v-model="selectedQtyL" :options="quantities" optionLabel="label" placeholder="Select quantity" />
            {{ quantityStore.selectedQtyL }}


        </div>
        <div class="flex flex-row gap-8 text-center align-items-center">
            <Select v-model="selectedQtyR" :options="quantities" optionLabel="label" placeholder="Select quantity" />
            {{ quantityStore.selectedQtyR }}
        </div>
        <ModalQuantity />
    </div>
</template>

<script setup>
import { useQuantityStore } from "@/store/quantityStore";
import { ref, computed } from "vue";
import ModalQuantity from "./ModalQuantity.vue";

const quantityStore = useQuantityStore();

const quantities = ref([
  { label: '1 box', value: 1 },
  { label: '2 boxes', value: 2 },
  { label: '3 boxes', value: 3 },
  { label: '4 boxes', value: 4 },
  { label: '5 boxes', value: 5 },
  { label: '6 boxes', value: 6 },
  { label: '7 boxes', value: 7 },
  { label: '8 boxes', value: 8 },
  { label: '9 boxes', value: 9 },
  { label: '10 boxes', value: 10 },
  { label: '11 boxes', value: 11 },
  { label: '12 boxes', value: 12 }
]);

const selectedQtyL = computed({
  get: () => quantityStore.selectedQtyL,
  set: (qty) => quantityStore.setSelectedQtyL(qty)
});

const selectedQtyR = computed({
  get: () => quantityStore.selectedQtyR,
  set: (qty) => quantityStore.setSelectedQtyR(qty)
});

</script>
