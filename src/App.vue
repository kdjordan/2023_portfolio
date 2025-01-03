<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useNavigationAnimation } from './composables/animations/useNavigationAnimation';
  import TopNavigation from './components/TopNavigation.vue';
  import Footer from './components/Footer.vue';
  import { RouterView } from 'vue-router';

  const { animateIntro } = useNavigationAnimation();

  onMounted(() => {
    animateIntro();
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
  #scrollerContainer {
    width: max-content;
    justify-content: center;
  }
  .scroller {
    scrollbar-color: var(--gray-200) transparent;
    scrollbar-width: thin;
  }
</style>
