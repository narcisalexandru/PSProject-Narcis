<template>
    <div>
      <h1>Glass Configuration</h1>
        <h2>{{ glassDetails.name }}</h2>
        <p>Price: {{ glassDetails.price }}</p>
      </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useGlassStore } from '@/store/glassStore';
  
  const route = useRoute();
  const configuration_id = route.params.configuration_id;
  
  const glassStore = useGlassStore();
  const { glassDetails, loading, error } = glassStore;
  
  onMounted(() => {
    glassStore.fetchGlassDetails(configuration_id);
  });
  </script>
  