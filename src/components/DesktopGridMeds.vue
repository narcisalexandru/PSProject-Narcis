<template>
    <div class="grid m-8">
        <div class="flex flex-column col-10 mx-auto">
            <div>
                <h1 class="font-normal mb-6">Compare similar products</h1>
            </div>
            <div class="grid mt-2">
                <div class="col-1 font-bold flex flex-column justify-content-end">
                    <div class="border_bottom_grey mb-2">Price</div>
                    <div class="border_bottom_grey ">Material</div>
                    <div class="border_bottom_grey mb-2">Dk/t (Oxygen Permeability)</div>
                    <div class="border_bottom_grey mb-4 ">Fit</div>
                    <div class="mb-5 mt-1">Best for</div>
                </div>
                <div class="custom-col-3" style="background-color: #E9F2FF; border-radius: 16px 16px 16px 16px; padding: 10px;">
                    <div class="flex">
                        <img class="max-w-full" src="/CLKITSDA30_MAIN.webp" />
                    </div>
                    <div class="text-center font-bold text-xl mb-8">KITS Daily</div>
                    <div class="border_bottom_grey mt-2">$28.00 for 30 lenses</div>
                    <div class="border_bottom_grey mt-2">Olifilcon B (Silicone Hydrogel)</div>
                    <div class="border_bottom_grey mt-2 pt-5">50-60</div>
                    <div class="border_bottom_grey mt-2">Highly flexibile</div>
                    <div class="mt-2 py-3">Cost effective, all day comfort</div>
                </div>
                <div class="custom-col-3">
                    <div class="flex">
                        <img class="max-w-full" src="/acuvue_moist.webp" />
                    </div>
                    <div class="text-center font-bold text-xl mb-8">Acuvue Moist</div>
                    <div class="border_bottom_grey mt-2">$40.00 for 30 lenses</div>
                    <div class="border_bottom_grey mt-2">Etafilcon A (Hydrogel)</div>
                    <div class="border_bottom_grey mt-2 pt-5">24-24</div>
                    <div class="border_bottom_grey mt-2">Flexibile fit</div>
                    <div class="mt-2 py-3">Comfort and ease of use</div>
                </div>
                <div class="custom-col-3">
                    <div class="flex">
                        <img class="max-w-full" src="/alcon_precision_1.webp" />
                    </div>
                    <div class="text-center font-bold text-xl mb-8">Precision 1</div>
                    <div class="border_bottom_grey mt-2">$42.00 for 30 lenses</div>
                    <div class="border_bottom_grey mt-2">Filcon 2 (Hydrogel)</div>
                    <div class="border_bottom_grey mt-2 pt-5">40</div>
                    <div class="border_bottom_grey mt-2">Flexibile fit</div>
                    <div class="mt-2 py-3">Enhanced comfort for extended daily wear</div>
                </div>
                <div class="custom-col-3">
                    <div class="flex">
                        <img class="max-w-full" src="/alcon_total1.webp" />
                    </div>
                    <div class="text-center font-bold text-xl mb-8">Dailies Total 1</div>
                    <div class="border_bottom_grey mt-2">$51.00 for 30 lenses</div>
                    <div class="border_bottom_grey mt-2">Somofilcon A (Silicone Hydrogel)</div>
                    <div class="border_bottom_grey mt-2 pt-5">156</div>
                    <div class="border_bottom_grey mt-2">Highly flexibile</div>
                    <div class="mt-2 py-3">Maximum hydration for sensitive eyes</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.border_bottom_grey {
    border-bottom: 1px solid #BBC1C9;
    padding-bottom: 5px;
    width: 100%;
}
.custom-col-3 {
    flex: 0 0 auto;
    padding: 0.5rem;
    width: 22.916675%;
}
</style>