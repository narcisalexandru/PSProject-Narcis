<template>
  <div class="flex flex-column mb-8">
    <div class="font-bold text-2xl mb-3">Time to review</div>
    <div class="flex flex-row">
      <div class="flex font-semibold">Lens:</div>
      <div class="flex">
        {{ glassesStore.selectedOptions.map((opt) => opt.label).join(", ") }}
      </div>
    </div>
  </div>

  <div class="grid surface-200 py-4 mr-7 mb-6 border-round">
    <div class="col-3 flex text-center flex-column p-5">
      <div class="col">OD<br />(Right)</div>
      <div class="col">OS<br />(Left)</div>
    </div>
    <div class="col-3 text-center">
      <div class="col text-sm">SPH</div>
      <div class="col mb-4 border-bottom-1">
        {{ glassesStore.selectedSphOD?.name || "0" }}
      </div>
      <div class="col border-bottom-1">
        {{ glassesStore.selectedSphOS?.name || "0" }}
      </div>
    </div>
    <div class="col-3 text-center">
      <div class="col text-sm">CYL</div>
      <div class="col mb-4 border-bottom-1">
        {{ glassesStore.selectedCylOD?.name || "0" }}
      </div>
      <div class="col border-bottom-1">
        {{ glassesStore.selectedCylOS?.name || "0" }}
      </div>
    </div>
    <div class="col-3 text-center">
      <div class="col text-sm">AXIS</div>
      <div class="col mb-4 border-bottom-1">
        {{ glassesStore.selectedAxisOD?.name || "0" }}
      </div>
      <div class="col border-bottom-1">
        {{ glassesStore.selectedAxisOS?.name || "0" }}
      </div>
    </div>
  </div>
  <div class="flex w-full gap-2">
    <Button class="w-8" label="Save" @click="handleSave" severity="contrast" />
    <Button
      class="w-3"
      label="Cancel"
      @click="handleCancel"
      severity="contrast"
    />
  </div>
</template>

<script setup>
import { useGlassesStore } from "@/store/glassesStore";

const glassesStore = useGlassesStore();
function handleSave() {
  glassesStore.confirmSave();
}
function handleCancel() {
  glassesStore.resetSelections();
  glassesStore.cancelSelections();
}
</script>
