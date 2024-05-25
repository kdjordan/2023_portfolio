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
	<div class="text-sizeBase px-[5vw] lg:max-w-7xl mx-auto">
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
	#scrollerContainer {
		width: max-content;
		justify-content: center;
	}
	.scroller {
		scrollbar-color: #9ff279 transparent;
		scrollbar-width: thin;
	}

	.shimmer {
		color: transparent;
		background: linear-gradient(to right, #9FF279 0%, #F2EFE9 50%, #9FF279 100%);
    background-size: 300%;
    background-clip: text;
		background-position-x: 100%;
    -webkit-background-clip: text; /* Required for some browsers */
    animation: shimmer 3s infinite linear;
	}

	@keyframes shimmer {
		to {
			background-position-x: 0%;
		}
	}
</style>
