<script setup lang="ts">
	import { onMounted } from 'vue';
	import TopNavigation from './components/TopNavigation.vue';
	import { gsap } from 'gsap/gsap-core';
	
	onMounted(() => {
		let flag: boolean = false;
		if(flag) {
			gsap.set('.home', { opacity: 0, y: -2000 });
			gsap.to('.home', { opacity: 1, y: 0, duration: 2 });
		}

});
</script>

<template>
	<div class="home bg-sky-950 h-screen">
		<TopNavigation />
		<main class="container mx-auto">
			<section class="flex flex-col h-screen items-center justify-center">
				<RouterView />
			</section>
		</main>
	</div>
</template>
