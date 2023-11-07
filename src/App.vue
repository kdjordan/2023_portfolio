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
	<div class="home bg-sky-950">
		<TopNavigation />
		<main class="container mx-auto">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style>
	.dots {
		background: linear-gradient(
					90deg,
					#082f49 calc(22px - 1px),
					transparent 1%
				)
				center / 22px 22px,
			linear-gradient(#082f49 calc(22px - 1px), transparent 1%) center /
				22px 22px,
			#9ff279;
	}
</style>
