<script setup lang="ts">
	import { onMounted } from 'vue';
	import TopNavigation from './components/TopNavigation.vue';
	import { gsap } from 'gsap/gsap-core';
	
	onMounted(() => {
  gsap.set('.home', { opacity: 0, y: -2000 });
  gsap.to('.home', { opacity: 1, y: 0, duration: 2 });
});
</script>

<template>
	<div class="home bg-modernBlack h-screen font-oswald tracking-wide">
		<TopNavigation />
		<main class="container mx-auto">
			<section class="flex flex-col h-screen items-center justify-center">
				<RouterView />
			</section>
		</main>
	</div>
</template>
