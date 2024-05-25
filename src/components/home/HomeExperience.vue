<script setup lang="ts">
	import TabbedIndex from '../TabbedIndex.vue';
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';

	onMounted(() => {
		fadeInTextBlock('#experience');
	});

</script>
<template>
	<section id="experience" style="scroll-margin-top: 100px;" class="pb-[5vh]">
		<div
		class="flex flex-col text-stone-300 pb-[5vh] w-full"
		>
		<h2 class="flex items-center text-highGreen pb-[3rem] w-full text-sizeLg">
			EXPERIENCE
			<span class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"></span>
		</h2>
			<TabbedIndex />
		</div>
	</section>
</template>
