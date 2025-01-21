<template>
      <div class="flex justify-content-center m-8">
    <div class="grid">
      <div class="col-6">
        <img src="/81000005390_IMG.webp" class="w-max-full w-full" />
      </div>
      <div class="col-6">
        <div class="flex w-full h-full flex-column justify-content-center">
          <div
            class="flex w-full font-bold text-2xl justify-content-center mb-2"
          >
            KITS Fir
          </div>
          <div
            class="flex w-full font-bold text-xl justify-content-center mb-2"
          >
            $28
          </div>
          <div class="flex w-full justify-content-center">
            <Button
              @click="glassesStore.visible = true"
              label="Select Lenses"
              severity="contrast"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGlassesStore } from "@/store/glassesStore";

const glassesStore = useGlassesStore();
</script>

<style>
</style>