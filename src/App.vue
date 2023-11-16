<script setup lang="ts">
	import { introAnimation } from './animations';
	import { onMounted } from 'vue';
	import TopNavigation from './components/TopNavigation.vue';
	import Footer from './components/Footer.vue';

	onMounted(() => {
		let flag: boolean = false;
		if (flag) {
			introAnimation();
		}
	});
</script>

<template>
	<TopNavigation />
	<main class="mx-4 text-[16px]">
		<RouterView />
	</main>
	<Footer />
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
