<template>
  <section
    ref="aboutRef"
    id="about"
    class="w-full flex flex-col transition-all duration-700"
    :class="{ 'opacity-0 translate-y-10': !hasScrolled, 'opacity-100 translate-y-0': hasScrolled }"
    style="scroll-margin-top: 350px"
  >
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="about-content">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Hey! I'm a software architect and developer who thrives on solving complex problems. I specialize in
            crafting elegant, high-performance web applications using modern technologies. What sets me apart is my attention to detail and my commitment to writing clean, maintainable code
            that scales.
          </p>
        </div>

        <div class="about-content">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Beyond coding, I like to be outside and stay active. I believe the discipline and focus required
            in sports directly translates to building better software. When I'm not crafting pixel-perfect animations or
            optimizing performance, you'll find me exploring new technologies or mentoring other developers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  const aboutRef = ref<HTMLElement | null>(null);
  const hasScrolled = ref(false);

  const handleScroll = () => {
    if (!aboutRef.value) return;

    const rect = aboutRef.value.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;

    if (rect.top < triggerPoint) {
      hasScrolled.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>
