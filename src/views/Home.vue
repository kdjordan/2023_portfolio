<script setup lang="ts">
	import HomeAbout from './HomeAbout.vue';
	import HomeExperience from './HomeExperience.vue';
	import HomeHero from './HomeHero.vue';
</script>
<template>
	<HomeHero />
	<HomeAbout />
	<HomeExperience />
</template>
<style>
	.gradient-text {
		background: linear-gradient(
			rgb(214, 211, 209),
			rgb(159, 242, 121)
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
