<script setup lang="ts">
	import { onMounted } from 'vue';
	import TopNavigation from './components/TopNavigation.vue';
	import { gsap } from 'gsap/gsap-core';
	

	onMounted(() => {

		
		let flag: boolean = true;
		if(flag) {
			
			gsap.set('.home', { opacity: 0, y: -2000 });
			gsap.to('.home', { opacity: 1, y: 0, duration: 2 });

			// setTimeout(() => {	
			// 	document.querySelector('.home').classList.add('dots');	
			// }, 5000)
		}

});
</script>

<template>
	<div class="home bg-sky-950">
		<TopNavigation />
		<main class="container mx-auto">
				<RouterView />
		</main>
	</div>
</template>

<style>
.dots {
	background: linear-gradient(90deg, #082f49 calc(22px - 1px), transparent 1%) center / 22px 22px,
		linear-gradient(#082f49 calc(22px - 1px), transparent 1%) center / 22px 22px,
		#9FF279;
}
</style>	
