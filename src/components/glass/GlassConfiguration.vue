<template>
    <GlassInformation />
  <!-- modal -->
  <Dialog v-model:visible="glassesStore.visible" modal header=" " class="w-full h-full">
    <div class="flex align-items-center">
      <Button label="Back" @click="handleBack" />
    </div>
    <div class="flex">
      <div class="w-6 p-8">
        <img src="/81000005390_IMG.webp" class="w-max-full w-full h-full" />
      </div>
      <div class="w-6">
        <div class="flex flex-column gap-2">
          <h1 class="font-bold mb-6">{{ glassesStore.currentTitle }}</h1>
          <div v-if="glassesStore.currentTitle === 'Enter your pupilary distance'">
              <GlassConfigurationPds />
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
                    <div class="w-full flex font-bold">{{ option.label }}</div>
                    <div class="w-full flex text-700">
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

const glassesStore = useGlassesStore();

function handleOptionSelect(option) {
  glassesStore.addOption(option);
  const nextOptions = glassesStore.optionSteps[option.next] || [];
  if (nextOptions.length) {
    glassesStore.setOptions(nextOptions);
    glassesStore.setTitle(glassesStore.titles[option.next]);
  } else {
    glassesStore.visible = false;
  }
}

function handleBack() {
  glassesStore.goBack();
}
</script>


<style scoped></style>
