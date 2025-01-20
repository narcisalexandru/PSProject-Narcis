<template>
    <div class="m-8">
      <h1>Glasses</h1>
      <p v-if="glassStore.loading">Loading glasses...</p>
      <p v-if="glassStore.error" class="text-red-500">{{ glassStore.error }}</p>
      <div v-if="glassStore.glasses.length > 0" class="grid gap-4">
        <div
          v-for="glass in glassStore.glasses"
          :key="glass.id"
          class="col-3 flex flex-column align-items-center"
        >
          <router-link :to="`/glasses/${glass.configuration_id}`">
            <img :src="glass.imageUrl || glass.image_tag" alt="Glass" class="max-w-full" />
            <div>
              <span class="font-bold">{{ glass.brand_name }}</span> - {{ glass.name }}
            </div>
            <div class="font-bold">${{ glass.price }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useGlassStore } from '@/store/glassStore';
  
  const glassStore = useGlassStore();
  
  onMounted(() => {
    glassStore.fetchGlasses();  // Fetching the list of glasses on mount
  });
  </script>
  