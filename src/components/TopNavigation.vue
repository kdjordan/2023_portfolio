<script setup lang="ts">
	import Name from './Name.vue';
  import { gsap } from 'gsap';
	import { onMounted } from 'vue';

	onMounted(() => {
		const tl = gsap.timeline();
    tl.set('.top-nav', { opacity: 0, borderBottom: 'none' })
    tl.to('.top-nav', { delay: 2, opacity: 1, duration: 1 });
    tl.to('.top-nav', { borderBottom: '1px solid #9FF279' });
  })
</script>

<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16"
	>
		<nav class="flex justify-between items-center h-full mx-[50px]">
			<div class="nav-left">
				<Name />
			</div>
			<div class="nav-right">
				<ul class="flex gap-4 text-highGreen text-md uppercase">
					<li><router-link to="/"></router-link></li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
