<template>
  <section
    ref="aboutRef"
    id="about"
    class="w-full flex flex-col transition-all duration-700"
    :class="{ 'opacity-0 translate-y-10': !hasScrolled, 'opacity-100 translate-y-0': hasScrolled }"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8 text-primary dark:text-primary-dark">About Me</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="about-content">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Hi there! I'm a passionate developer who loves creating elegant solutions to complex problems. With a keen
            eye for detail and a commitment to clean code, I transform ideas into reality.
          </p>
        </div>

        <div class="about-content">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing knowledge with the developer community.
          </p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a
          href="#contact"
          class="btn-primary"
          >Get in Touch</a
        >
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
