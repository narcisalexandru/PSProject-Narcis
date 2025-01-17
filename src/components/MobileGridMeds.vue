<template>
    <div class="m-5 lg:hidden">
        <Swiper
            :slides-per-view="'auto'"
            :space-between="30"
            :navigation="true"
            :scrollbar="{
                hide: true,
                draggable: true,
          }"
            :modules="[Navigation, Scrollbar]"
            class="hero-swiper__container swiper-scrollbar border-round bg-transparent"
        >
        <SwiperSlide class="overflow-hidden w-5">
            <a target="_blank" rel= "noopener noreferrer">
                <img 
                    class="block bg-center border-round-lg w-full h-full " src="/acuvue_moist.webp" 
                />
            </a>
            <div class="font-bold text-xl">1-Day Acuvue Moist 30 Pack</div>
            <div class="font-normal text-md">$40.00 for 30 lenses</div>
        </SwiperSlide>
        <SwiperSlide class="overflow-hidden w-5">
            <a target="_blank" rel= "noopener noreferrer">
                <img 
                    class="block bg-center border-round-lg w-full h-full " src="/alcon_precision_1.webp" 
                />
            </a>
            <div class="font-bold text-xl">Precision 1 (30 Pack)</div>
            <div class="font-normal text-md">$42.00 for 30 lenses</div>
        </SwiperSlide>
        <SwiperSlide class="overflow-hidden w-5">
            <a target="_blank" rel= "noopener noreferrer">
                <img 
                    class="block bg-center border-round-lg w-full h-full " src="/alcon_total1.webp" 
                />
            </a>
            <div class="font-bold text-xl">Dailies Total 1 (30 Pack)</div>
            <div class="font-normal text-md">$51.00 for 30 lenses</div>
        </SwiperSlide>
        </Swiper>
    </div>
</template>
  
<script setup>
import { Navigation, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/vue';
</script>

<style>
.hero-swiper__container:hover .swiper-button-next,
.hero-swiper__container:hover .swiper-button-prev  {
    display: flex;
}
.hero-swiper__container .swiper-scrollbar {
    display: none;
    position: relative;
    max-width: 50%;
    height: 6px;
    left: 0;
    top: 0;
    margin: auto;
    margin-top: 3rem !important;
    transition: 0.35s;
    cursor: pointer;
}
.swiper-button-next, .swiper-button-prev {
    display: flex;
    background-color: #0e0f11;
    border-radius: 50%;
    background-image: unset;
    height: 48px;
    width: 48px;
}
.swiper-button-next::after, .swiper-button-prev::after {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px !important;
    color: white;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    display: none !important;
}
</style>