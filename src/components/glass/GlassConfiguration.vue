<template>
  <Dialog
    v-model:visible="glassesStore.visible"
    modal
    class="w-full h-full p-dialog-maximized"
  >
      <template #header>
        <div class="flex align-items-center">
          <Button label="Back" @click="handleBack" severity="contrast" />
        </div>
      </template>
    <div class="flex align-items-center">
      <div class="w-5 p-8">
        <div class="flex justify-content-center font-bold text-3xl">KITS</div>
        <img src="/81000005390_IMG.webp" class="w-max-full w-full" />
        <div class="flex flex-row justify-content-center">
          <div class="flex font-bold text-2xl">KITS | &nbsp; </div>
          <div class="flex text-2xl">Fir</div>
        </div>
        <div class="flex flex-row justify-content-center mt-2">
          <div class="text-xl">Frame price:&nbsp;</div>
          <div class="flex font-bold text-xl">$28</div>
        </div>
      </div>
      <div class="w-7 h-full border-left-1 border-400 p-8">
        <div class="flex flex-column">
          <h1 class="font-bold mb-8 ml-2">{{ glassesStore.currentTitle }}</h1>
          <div
            v-if="glassesStore.currentTitle === 'Enter your pupilary distance'"
          >
            <GlassConfigurationPds />
          </div>
          <div v-else-if="glassesStore.currentTitle === 'Summary'">
            <div>
              <GlassSummary />
            </div>
          </div>
          <div v-else-if="glassesStore.currentTitle === 'Choose Blue Light Blocking Option'">
            <GlassBlueSelection />
          </div>
          <div v-else>
            <div v-for="option in glassesStore.currentOptions" :key="option.id">
              <Button
                class="bg-white text-900 w-full border-none"
                @click="handleOptionSelect(option)"
                >
                <div
                  :class="{ 'selected-option': glassesStore.selectedOptionId[glassesStore.currentTitle] === option.id }"
                  class="border-round w-full shadow-4 flex align-items-center justify-content-start h-7rem"
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
                    <div class="w-full flex text-left">

                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { useGlassesStore } from "@/store/glassesStore";
import GlassSummary from "./GlassSummary.vue";
import GlassConfigurationPds from "./GlassConfigurationPds.vue";
import GlassBlueSelection from "./GlassBlueSelection.vue";

const maximize = true;

const glassesStore = useGlassesStore();

function handleOptionSelect(option) {
  if (glassesStore.initialSelection.length === 0) {
    glassesStore.initialSelection.push(option);
  }

  glassesStore.addOption(option);
  glassesStore.setSelectedOptionId(glassesStore.currentTitle, option.id);

  glassesStore.history.push([...glassesStore.currentOptions]);
  glassesStore.titleHistory.push(glassesStore.currentTitle);

  if (option.id === "progressives") {
    glassesStore.setOptions(glassesStore.optionSteps.progressives_options);
    glassesStore.setTitle(glassesStore.titles.progressives_options);
  } else if (option.id === "readers") {
    glassesStore.setOptions(glassesStore.optionSteps.readers_options);
    glassesStore.setTitle(glassesStore.titles.readers_options);
  } else if (option.next === "progressives_pds" || option.next === "readers_pds") {
    glassesStore.setOptions(glassesStore.optionSteps[option.next]);
    glassesStore.setTitle(glassesStore.titles[option.next]);
  } else if (option.id === "blue_light_blocking") {
    if (
      glassesStore.initialSelection.some((sel) => sel.id === "progressives")
    ) {
      glassesStore.setOptions(glassesStore.optionSteps.blue_light_blocking_options);
      glassesStore.setTitle("Choose Blue Light Blocking Option");
    } else {
      glassesStore.saveSelections();
      glassesStore.setFinalPageOptions();
    }
  } else if (option.next) {
    glassesStore.setOptions(glassesStore.optionSteps[option.next]);
    glassesStore.setTitle(glassesStore.titles[option.next]);
  } else {
    glassesStore.saveSelections();
    glassesStore.setFinalPageOptions();
  }
}


function handleBack() {
  if (glassesStore.history.length) {
    const previousOptions = glassesStore.history.pop();
    const previousTitle = glassesStore.titleHistory.pop();
    glassesStore.currentOptions = previousOptions;
    glassesStore.currentTitle = previousTitle;
    glassesStore.selectedOptions = glassesStore.selectedOptions.slice(0, -1);
  } else {
    glassesStore.visible = false;
  }
}


</script>

<style>
.selected-option {
  border-top: 4px solid black !important;
}
</style>
