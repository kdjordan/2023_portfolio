<script setup lang="ts">
	import Name from './Name.vue';
	import { gsap } from 'gsap';
	import { onMounted } from 'vue';
	


	onMounted(() => {
		let flag: boolean = false;
		if(flag) {
			const tl = gsap.timeline();
			tl.set('.top-nav', { opacity: 0, borderBottom: 'none' });
			tl.to('.top-nav', { delay: 2, opacity: 1, duration: 1 });
			tl.to('.top-nav', { borderBottom: '1px solid #9FF279' });
		}
	});
</script>

<template>
	<div class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen">
		<nav class="flex justify-between items-center h-full mx-[20px]">
			<div class="nav-left">
				<Name />
			</div>
			<div class="nav-right">
				<ul class="flex gap-4 text-highGreen text-md uppercase">
					<li><router-link to="/"></router-link></li>
					<li><font-awesome-icon icon="fa-solid fa-at" /></li>
					<li><font-awesome-icon icon="fa-brands fa-github" /></li>
					<li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
				</ul>
			</div>
		</nav>
	</div>
</template>
