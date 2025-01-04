<template>
  <section
    ref="aboutRef"
    id="about"
    class="w-full flex flex-col transition-all duration-700"
    :class="{ 'opacity-0 translate-y-10': !hasScrolled, 'opacity-100 translate-y-0': hasScrolled }"
    style="scroll-margin-top: 350px"
  >
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-1 gap-8">
        <div class="about-content flex flex-col gap-6">
          <p class="text-lg dark:text-gray-300">
            Hey all - thanks for cheking in. As you can see, I'm Kevin and well... this is my site. I'm a
            business/product/software guy that has been creating things for a minute or two. I really enjoy building
            things from the ground up and seeing ideas get realized.
          </p>
          <p class="text-lg dark:text-gray-300">
            I'm currently working in the telecommunications space and participating in the developemnt of a global e-sim product. I;m also engaged in building tools to support the wholesale VOIP market.
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
