<template>
    <div class="m-5">
        <Swiper
        :slides-per-view="'auto'"
          :space-between="15"
          :navigation="true"
          :scrollbar="{
            hide: false,
            draggable: true,
          }"
          :modules="[Navigation, Scrollbar]"
          class="hero-swiper__container swiper-scrollbar border-round bg-transparent"
        >
            <SwiperSlide class="relative overflow-hidden w-10 ml-2">
                    <a href="https://www.kits.ca/glasses" target="_blank" rel= "noopener noreferrer">
                        <img 
                            class="block bg-center border-round-lg w-full h-full " src="/Jan14-2025-Desktop-HP-1.webp" 
                        />
                    </a>
                    <div 
                        class="hero__insurance absolute z-5 top-0 right-0 p-2 text-white text-base font-medium flex align-items-center"
                    >
                        <img src="/shield-with-checkmark-white.svg" class="mr-2"></img>
                        New year, renewed insurance benefits
                    </div>
                    <div class="absolute flex w-full header-text-wrapper flex-column align-items-start text-white z-5 bottom-50">
                        <div class="header-description text-3xl font-semibold my-2">
                            Get 50% off lens upgrades
                        </div>
                        <div class="header-coupon text-lg font-light mb-3 mt-2 ">
                            Use code: 
                            <span class="font-bold">WINTER50</span>
                        </div>
                        <a href="https://www.kits.ca/glasses" target="_blank" rel= "noopener noreferrer">
                            <button 
                                class="absolute block border-none button-shop bg-white px-5 py-3 text-base     font-semibold border-round-lg hover:surface-hover "
                            >
                                Shop glasses
                            </button>
                        </a>
                    </div>
            </SwiperSlide>
            <SwiperSlide class="relative overflow-hidden w-10 ml-2">
                    <a href="https://www.kits.ca/contacts" target="_blank" rel= "noopener noreferrer">
                        <img 
                            class="block bg-center border-round-lg w-full h-full " src="/Jan14-2025-Desktop-HP-2.webp" 
                        />
                    </a>
                    <div 
                        class="hero__insurance absolute z-5 top-0 right-0 p-2 text-white text-base font-medium flex align-items-center"
                    >
                        <img src="/shield-with-checkmark-white.svg" class="mr-2"></img>
                        New year, renewed insurance benefits
                    </div>
                    <div class="absolute flex w-full header-text-wrapper flex-column align-items-start text-white z-5 bottom-50">
                        <div class="header-description text-3xl font-semibold my-2">
                            30% off your first contacts order
                        </div>
                        <div class="header-coupon text-lg font-light mb-3 mt-2 ">
                            Use code: 
                            <span class="font-bold">HELLO</span>
                        </div>
                        <a href="https://www.kits.ca/contacts" target="_blank" rel= "noopener noreferrer">
                            <button 
                                class="absolute block border-none button-shop bg-white px-5 py-3 text-base     font-semibold border-round-lg hover:surface-hover"
                            >
                                Shop contacts
                            </button>
                        </a>
                    </div>
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
    display: block;
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
    display: none;
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

.header-text-wrapper {
    max-width: 50%;
    transform: translateY(50%);
    padding: 20px;
    transition: 0.50s;
}
.header-description {
    line-height: initial;
    color: #414141;
}
.header-coupon {
    color: #414141;
}
.hero__insurance {
    background-color: #415FF1;
    border-radius: 0 8px 0 8px;
}

/* transform */

.swiper-slide:hover {
    transform: scale(1.01);
    transition: 600ms;
}

</style>