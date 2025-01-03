<template>
  <div
    class="section-breaker relative w-full h-[200px] flex items-center justify-center my-32 transition-all duration-700"
    :class="{ 'opacity-0 translate-y-10': !hasScrolled, 'opacity-100 translate-y-0': hasScrolled }"
    ref="sectionRef"
  >
    <!-- Fixed Center Letter Container -->
    <span
      v-if="centerLetter"
      class="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[4rem] font-bold"
    >
      {{ centerLetter.toUpperCase() }}
    </span>

    <div
      ref="textCircle"
      class="text-circle"
    >
      <!-- Rotating Text -->
      <span
        v-for="(letter, index) in circularText"
        :key="index"
        class="absolute left-1/2 text-white text-lg"
        :style="`
          transform-origin: 0 100px;
          transform: rotate(${index * rotationPerLetter}deg) translateX(-50%);
        `"
      >
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, onBeforeUnmount, onUnmounted } from 'vue';
  import gsap from 'gsap';

  const props = defineProps<{
    text: string;
    centerLetter?: string;
  }>();

  const textCircle = ref<HTMLElement | null>(null);
  const tl = ref<gsap.core.Timeline | null>(null);
  const sectionRef = ref<HTMLElement | null>(null);
  const hasScrolled = ref(false);

  const circularText = computed(() => {
    return (props.text + ' ' + props.text + ' ').toUpperCase().split('');
  });

  const rotationPerLetter = computed(() => {
    return 360 / circularText.value.length;
  });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      hasScrolled.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    if (textCircle.value) {
      tl.value = gsap.timeline({ repeat: -1 }).to(textCircle.value, {
        rotation: -360,
        duration: 20,
        ease: 'none',
      });
    }
  });

  onBeforeUnmount(() => {
    if (tl.value) {
      tl.value.kill();
    }
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style scoped>
  .text-circle {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
