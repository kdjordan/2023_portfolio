<script setup lang="ts">
  import TheExperience from '../components/home/TheExperience.vue';
  import HomeHero from '../components/home/HomeHero.vue';
  import HomeProjects from '../components/home/HomeProjects.vue';
  import HomeContact from '../components/home/HomeContact.vue';
  import SectionBreaker from '../components/SectionBreaker.vue';
</script>
<template>
  <div>
    <HomeHero />
    <SectionBreaker
      text="The Experinece"
      centerLetter="E"
    />
    <TheExperience />
	<SectionBreaker
      text="The Projects"
      centerLetter="P"
    />
    <HomeProjects />
    <HomeContact />
  </div>
</template>
