<script setup lang="ts">
	import TabbedIndex from '../components/TabbedIndex.vue';
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../animations';

	onMounted(() => {
		fadeInTextBlock('#experience');
	});

</script>
<template>
	<section id="experience" style="scroll-margin-top: 100px;">
		<div
			class="flex flex-col items-center text-stone-300 pb-[20vh] lg:max-w-[750px] lg:mx-auto"
		>
		<h2 class="flex items-center text-highGreen pb-[3rem] w-full text-xl">
			EXPERIENCE
			<span class="block bg-highGreen h-[1px] ml-4 w-[100%] opacity-40"></span>
		</h2>
			<TabbedIndex />
		</div>
	</section>
</template>
