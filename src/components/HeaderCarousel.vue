<template>
    <Swiper
      :slides-per-view="'auto'"
      :space-between="30"
      :navigation="true"
      :scrollbar="{
        hide: false,
        draggable: true,
      }"
      :modules="[Navigation, Scrollbar]"
      class="hero-swiper__container swiper-scrollbar bg-white"
    >
        <SwiperSlide class="block w-10 ml-2">
            <img class="block bg-center border-round-lg w-full h-full " src="/Jan14-2025-Desktop-HP-1.webp" />
        </SwiperSlide>
        <SwiperSlide class="block w-10 mr-2">
            <img class="block bg-center border-round-lg w-full h-full " src="/Jan14-2025-Desktop-HP-2.webp" />
        </SwiperSlide>
    </Swiper>
</template>
  
<script setup>
import { Navigation, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/vue';
</script>

<style>
.hero-swiper__container .swiper-scrollbar {
    display: block;
    position: relative;
    max-width: 50%;
    width: 100%;
    height: 6px;
    left: 0;
    top: 0;
    margin: auto;
    margin-top: 3rem !important;
    transition: 0.35s;
}
</style>