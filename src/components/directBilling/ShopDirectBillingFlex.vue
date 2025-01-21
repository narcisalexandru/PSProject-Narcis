<template>
  <div
    class="flex flex-row w-full p-8 justify-content-center align-items-center gap-8"
  >
    <div class="flex w-6 flex-column">
      <span
        class="text-green-700 w-5rem text-center font-semibold bg-green-50 border-none border-round-3xl px-3 py-2"
        >NEW</span
      >
      <div class="text-3xl flex-wrap text-900 font-medium mt-3">
        Maximize your benefits with online Direct Billing!
      </div>
      <div class="mt-3">
        <ul class="list-none">
          <div class="flex gap-3">
            <i class="pi pi-check text-xs line-height-4"></i>
            <li class="text-base">Claim your insurance benefits instantly</li>
          </div>
          <div class="flex gap-3">
            <i class="pi pi-check text-xs line-height-4"></i>
            <li class="text-base">Skip the paperwork hassle</li>
          </div>
          <div class="flex gap-3">
            <i class="pi pi-check text-xs line-height-4"></i>
            <li class="text-base">
              Available for prescription glasses and contact lenses
            </li>
          </div>
        </ul>
        <div class="flex flex-row gap-3 mt-4">
          <a
            href="https://www.kits.ca/glasses"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="surface-900 text-white font-semibold px-5 py-3 border-none border-round-xl hover:surface-700"
            >
              Shop with Direct Billing
            </button>
          </a>
          <a
            href="https://www.kits.ca/insurance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="bg-white text-900 font-semibold px-5 py-3 border-1 border-round-xl hover:surface-900 hover:text-white"
            >
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="flex w-4 flex-column">
      <video
        class="w-full border-none border-round-3xl"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/Direct-Billing-Video-Desktop.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script setup></script>

<style></style>
