<template>
  <div v-for="option in glassesStore.optionSteps.blue_light_blocking_options" :key="option.id">
    <Button
      class="bg-white text-900 w-full border-none"
      @click="handleOptionSelect(option)"
    >
      <div
        :class="{ 'selected-option': glassesStore.selectedOptionId[glassesStore.currentTitle] === option.id }"
        class="border-round w-full shadow-4 flex align-items-center justify-content-start"
      >
        <div class="mx-6 my-4 w-2">
          <img :src="option.image" class="w-max-full w-full flex" />
        </div>
        <div class="w-full">
          <div class="w-full flex text-left font-bold">
            {{ option.label }}
          </div>
          <div class="w-full flex text-left text-700">
            {{ option.description }}
          </div>
        </div>
      </div>
    </Button>
  </div>
</template>
<script setup>
import { useGlassesStore } from "@/store/glassesStore";

const glassesStore = useGlassesStore();

function handleOptionSelect(option) {

  glassesStore.addOption(option);
  glassesStore.setSelectedOptionId(glassesStore.currentTitle, option.id);

  glassesStore.history.push([...glassesStore.currentOptions]);
  glassesStore.titleHistory.push(glassesStore.currentTitle);
  
  glassesStore.saveSelections();
  glassesStore.setFinalPageOptions();
}

</script>