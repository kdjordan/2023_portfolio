<script setup lang="ts">
  import { introAnimation } from './animations';
  import { onMounted } from 'vue';
  import TopNavigation from './components/TopNavigation.vue';
  import Footer from './components/Footer.vue';

  onMounted(() => {
    let flag: boolean = true;
    if (flag) {
      introAnimation();
    }
  });
</script>

<template>
  <div class="text-sizeBase px-[5vw] lg:max-w-7xl mx-auto">
    <TopNavigation />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
  .gradient-text {
    color: var(--primary-white);
  }
  #scrollerContainer {
    width: max-content;
    justify-content: center;
  }
  .scroller {
    scrollbar-color: var(--gray-200) transparent;
    scrollbar-width: thin;
  }
</style>
