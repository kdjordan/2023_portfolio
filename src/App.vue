<script setup lang="ts">
	import { onMounted } from 'vue';
	import { gsap } from 'gsap';
	import TopNavigation from './components/TopNavigation.vue';

	onMounted(() => {
		gsap.from('.home', { y: -2000, opacity: 0 });
		gsap.to('.home', {
			duration: 2,
			y: 0,
			opacity: 1,
			ease: 'power4.out',
		});
	});
</script>

<template>
	<div class="home bg-blue-500 h-screen flex flex-col items-center">
		<TopNavigation />
		<div class="p-32 border-4 border-white">
			<h1>Home</h1>
		</div>
	</div>
</template>
