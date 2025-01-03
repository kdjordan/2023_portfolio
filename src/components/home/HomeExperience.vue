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
			<TabbedIndex />
		</div>
	</section>
</template>
