<script setup lang="ts">
	import { introAnimation } from './animations';
	import { onMounted } from 'vue';
	import TopNavigation from './components/TopNavigation.vue';
	import Footer from './components/Footer.vue';

	onMounted(() => {
		let flag: boolean = true;
		if (flag) {
			introAnimation();
		}
	});
</script>

<template>
	<div class="text-sizeBase px-[5vw]">
	<TopNavigation />
	<main>
		<RouterView />
	</main>
	<Footer />
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
	#scroller {
	scrollbar-color: #9FF279 transparent;
  scrollbar-width: thin;
}
</style>
