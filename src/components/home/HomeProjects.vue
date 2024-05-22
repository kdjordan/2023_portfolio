<script setup lang="ts">
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';
	import Card from '@/components/Card.vue';
	import projects from '../../assets/projects.ts';

	onMounted(() => {
		fadeInTextBlock('#projects');
	});
</script>
<template>
	<section
		id="projects"
		class="flex flex-col pb-[30vh]"
		style="scroll-margin-top: 100px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[5vh] lg:max-w-[1100px] lg:mx-auto w-full"
		>
			<h2
				class="flex items-center text-highGreen pb-[3rem] w-full text-xl whitespace-nowrap"
			>
				SOME PROJECTS
				<span
					class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
		</div>
		<div class="pb-10">
			<div
				class="flex flex-wrap items-center justify-center gap-8 md:gap-8"
			>
				<div v-for="(p, index) in projects" :key="index">
					<Card
						:imgUrl="`./image/${p.image}`"
						:name="p.name"
						:description="p.description"
						:link="p.link"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
