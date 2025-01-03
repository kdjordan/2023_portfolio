<script setup lang="ts">
  import TheExperience from '../components/home/HomeExperience.vue';
  import HomeHero from '../components/home/HomeHero.vue';
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
      text="The Contacts"
      centerLetter="C"
    />
    <HomeContact />
  </div>
</template>
