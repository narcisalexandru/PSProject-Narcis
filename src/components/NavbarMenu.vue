<template>
    <div class="flex justify-content-center align-items-center w-full">
        <Menubar :model="items" >
            <template #start>
              <a href="https://pixelsolutions.ro" target="_blank">
                <img alt="logo" src="/logo-pixel-solutions.svg" height="20" class="m-2" />
              </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
        router.push('/')
      },
    },
    {
        label: 'Flex',
        icon: 'pi pi-th-large',
        command: () => {
        router.push('/flex')
      },
    },
    {
        label: 'Grid',
        icon: 'pi pi-table',
        command: () => {
        router.push('/grid')
      },
    },
    {
        label: 'Meds',
        icon: 'pi pi-table',
        command: () => {
        router.push('/meds')
      },
    },
]);
</script>

