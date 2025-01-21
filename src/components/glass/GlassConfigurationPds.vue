<template>
  <div class="flex w-full flex-column gap-4">
    <div class="flex flex-column w-full surface-200 border-round p-4 gap-3">
      <div class="font-bold">PD Measurement</div>
      <Select
        v-model="glassesStore.selectedPds"
        :options="glassesStore.pds"
        optionLabel="name"
        placeholder="Select a PD"
        class="w-3 md:w-56"
      />
    </div>
    <h1 class="font-bold text-2xl">Enter your prescription manually</h1>
    <div class="flex flex-column w-full surface-200 p-4 border-round">
      <div class="grid">
        <div class="col-3 flex flex-column p-5">
          <div class="col">OD<br />(Right)</div>
          <div class="col">OS<br />(Left)</div>
        </div>
        <div class="col-3">
          <div class="col text-sm ml-3">SPH</div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedSphOD"
              :options="glassesStore.sphOD"
              optionLabel="name"
              placeholder="--"
            />
          </div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedSphOS"
              :options="glassesStore.sphOS"
              optionLabel="name"
              placeholder="--"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="col text-sm ml-3">CYL</div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedCylOD"
              :options="glassesStore.cylOD"
              optionLabel="name"
              placeholder="--"
            />
          </div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedCylOS"
              :options="glassesStore.cylOS"
              optionLabel="name"
              placeholder="--"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="col text-sm ml-3">AXIS</div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedAxisOD"
              :options="glassesStore.axisOD"
              optionLabel="name"
              placeholder="--"
            />
          </div>
          <div class="col">
            <Select
              v-model="glassesStore.selectedAxisOS"
              :options="glassesStore.axisOS"
              optionLabel="name"
              placeholder="--"
            />
          </div>
        </div>
      </div>
    </div>
    <Button
      class="w-full"
      label="CONTINUE"
      severity="contrast"
      @click="handleContinue()"
    />
  </div>
</template>
<script setup>
import { useGlassesStore } from "@/store/glassesStore";

const glassesStore = useGlassesStore();

function handleContinue() {
  glassesStore.setOptions(glassesStore.optionSteps["non_prescription_options"]);
  glassesStore.setTitle(glassesStore.titles["non_prescription_options"]);
}
</script>
