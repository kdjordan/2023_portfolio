<script setup lang="ts">
  import gsap from 'gsap';
  import TheExperience from '../components/home/HomeExperience.vue';
  import HomeHero from '../components/home/HomeHero.vue';
  import HomeContact from '../components/home/HomeContact.vue';
  import SectionBreaker from '../components/SectionBreaker.vue';
  import HomeAbout from '../components/home/HomeAbout.vue';

  const onHeroComplete = () => {
    gsap.to('.about-section', {
      opacity: 1,
      duration: 0.7,
      delay: 0.5,
    });
  };
</script>

<template>
  <div class="min-h-screen">
    <HomeHero @animation-complete="onHeroComplete" />
    <div class="about-section opacity-0 relative z-0">
      <SectionBreaker
        text="The About"
        centerLetter="A"
        :useScrollAnimation="false"
      />
      <HomeAbout />
    </div>
    <div class="experience-section">
      <SectionBreaker
        text="The Experience"
        centerLetter="E"
        :useScrollAnimation="true"
      />
      <TheExperience />
    </div>
    <div class="contact-section">
      <SectionBreaker
        text="The Contacts"
        centerLetter="C"
        :useScrollAnimation="true"
      />
      <HomeContact />
    </div>
  </div>
</template>
