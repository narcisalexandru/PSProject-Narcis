<template>
  <Dialog
    v-model:visible="glassesStore.visible"
    modal
    header=" "
    class="w-full h-full"
  >
    <template #header>
      <div class="flex align-items-center">
        <Button label="Back" @click="handleBack" severity="contrast" />
      </div>
    </template>
    <div class="flex">
      <div class="w-6 p-8">
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
      <div class="w-6">
        <div class="flex flex-column gap-2">
          <h1 class="font-bold mb-6">{{ glassesStore.currentTitle }}</h1>
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
          <div v-else>
            <div v-for="option in glassesStore.currentOptions" :key="option.id">
              <Button
                class="bg-white text-900 border-none w-full"
                @click="handleOptionSelect(option)"
              >
                <div
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

const glassesStore = useGlassesStore();

function handleOptionSelect(option) {
  glassesStore.addOption(option);

  if (option.id === "progressives") {
    glassesStore.setOptions(glassesStore.optionSteps.progressives_options);
    glassesStore.setTitle(glassesStore.titles.progressives_options);
  } else if (option.id === "readers") {
    glassesStore.setOptions(glassesStore.optionSteps.readers_options);
    glassesStore.setTitle(glassesStore.titles.readers_options);
  } else if (option.next === "progressives_pds" || option.next === "readers_pds") {
    glassesStore.setOptions(glassesStore.optionSteps[option.next]);
    glassesStore.setTitle(glassesStore.titles[option.next]);
  } else if (option.next) {
    glassesStore.setOptions(glassesStore.optionSteps[option.next]);
    glassesStore.setTitle(glassesStore.titles[option.next]);
  } else {
    glassesStore.saveSelections();
    glassesStore.setFinalPageOptions();
  }
}

function handleBack() {
  glassesStore.goBack();
}
</script>
