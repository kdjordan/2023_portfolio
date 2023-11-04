<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import HomeAbout from './HomeAbout.vue';
	import HomeExperience from './HomeExperience.vue';
	import HomeHero from './HomeHero.vue';

	const loaded = ref(false);

	onMounted(() => {
		setTimeout(() => { 
			loaded.value = true;
		}, 2)
	});
</script>
<template>
	<HomeHero />
	<div v-if="loaded">
		<HomeAbout />
		<HomeExperience />
	</div>
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
