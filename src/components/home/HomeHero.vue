<script setup lang="ts">
  // We don't need to call useHeroAnimation here anymore since it's handled by the navigation animation
  // import { useHeroAnimation } from '@/composables/animations/useHeroAnimation';
  // useHeroAnimation();
</script>

<template>
  <section
    id="hero"
    class="flex flex-col min-h-screen w-full px-4 bg-bg-primary pt-32 md:pt-40"
  >
    <div class="flex flex-col w-full">
      <h1 class="flex flex-col text-primary-white font-arial">
        <div class="overflow-hidden">
          <span class="text-[15vw] md:text-[12vw] uppercase leading-[0.9] tracking-tighter block name-reveal"
            >Kevin</span
          >
        </div>
        <div class="overflow-hidden self-end">
          <span class="text-[15vw] md:text-[12vw] uppercase leading-[0.9] tracking-tighter block name-reveal"
            >Jordan</span
          >
        </div>
      </h1>
      <div
        id="job"
        class="text-primary-white text-xl md:text-2xl mt-8 tracking-widest font-mono"
      >
        >>> DEVELOP
      </div>
    </div>
  </section>
</template>

<style scoped>
  #hero {
    opacity: 1;
  }

  #job {
    opacity: 0;
  }

  .name-reveal {
    clip-path: inset(100% 0 0 0);
    transform: translateY(0);
  }
</style>
