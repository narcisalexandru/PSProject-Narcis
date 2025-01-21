<template>
    <div class="flex justify-content-center m-8">
        <div class="grid border-1">
            <div class="col-6">
                <img src="/81000005390_IMG.webp" class="w-max-full w-full" />
            </div>
            <div class="col-6">
                <div class="col-12 justify-content-center">
                    <div>KITS Fir</div>
                    <div>$28</div>
                    <Button @click="visible = true" label="Select Lenses" severity="contrast" />
                </div>
            </div>
        </div>
    </div>
    <!-- modal -->
    <Dialog v-model:visible="visible" modal header=" " class=" w-full h-full">
        <div class="flex">
            <div class="w-6 p-8">
                <img src="/81000005390_IMG.webp" class="w-max-full w-full h-full" />
            </div>
            <div class="w-6">
                <div class="flex flex-column gap-2">
                    <h1 class="font-bold mb-6">Choose the type of glasses that you would like</h1>
                    <Button class="bg-white text-900 border-none" @click="doSomething()">
                        <div class="border-round w-full shadow-4 flex align-items-center justify-content-start">
                            <div class="mx-6 my-4 w-2">
                                <img src="/clear_lenses.svg" class="w-max-full w-full flex" />
                            </div>
                            <div class="w-full">
                                <div class="w-full flex font-bold">Single Vision</div>
                                <div class="w-full flex text-700">Corrects for one field of vision (near, itermediate or far).</div>
                            </div>
                        </div>
                    </Button>
                    <Button class="bg-white text-900 border-none" @click="doSomething()">
                        <div class="border-round w-full shadow-4 flex align-items-center justify-content-start">
                            <div class="mx-6 my-4 w-2">
                                <img src="/progressives_lenses_standard.svg" class="w-max-full w-full flex" />
                            </div>
                            <div class="w-full">
                                <div class="w-full flex font-bold">Progressives</div>
                                <div class="w-full text-left text-700">Corrects near, itermediate, and for fields of vision in one lens so you don't have tp switch between multiple pairs.</div>
                            </div>
                        </div>
                    </Button>
                    <Button class="bg-white text-900 border-none" @click="doSomething()">
                        <div class="border-round w-full shadow-4 flex align-items-center justify-content-start">
                            <div class="mx-6 my-4 w-2">
                                <img src="/reading_lenses.svg" class="w-max-full w-full flex" />
                            </div>
                            <div class="w-full">
                                <div class="w-full flex font-bold">Readers</div>
                                <div class="w-full flex text-700">Offers simple magnification for reading.</div>
                            </div>
                        </div>
                    </Button>
                    <Button class="bg-white text-900 border-none" @click="doSomething()">
                        <div class="border-round w-full shadow-4 flex align-items-center justify-content-start">
                            <div class="mx-6 my-3 w-2">
                                <img src="/Classic.svg" class="w-max-full w-full flex" />
                            </div>
                            <div class="w-full">
                                <div class="w-full flex font-bold">Non-Prescription</div>
                                <div class="w-full flex text-700">Lens with no vision correction</div>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>

        </div>
    </Dialog>
</template>
<script setup>

import { ref } from 'vue';

const visible = ref(false)

</script>

<style scoped>
</style>