
<template>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Edit Quantity" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-4">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <Select v-model="selectedQtyL" :options="quantities" optionLabel="label" placeholder="Select quantity" class="w-12" />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <Select v-model="selectedQtyR" :options="quantities" optionLabel="label" placeholder="Select quantity" class="w-12" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { useQuantityStore } from "@/store/quantityStore";
import { ref, computed } from "vue";

const visible = ref(false);
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
