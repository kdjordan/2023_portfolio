<script setup lang="ts">
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';
	import projects from '../../assets/projects.ts';

	onMounted(() => {
		fadeInTextBlock('#projects');
	});
</script>
<template>
	<section
		id="projects"
		class="flex flex-col justify-center pb-[10vh]"
		style="scroll-margin-top: 200px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[20vh] lg:max-w-[750px] lg:mx-auto"
		>
			<h2
				class="flex items-center text-highGreen pb-[3rem] w-full text-xl"
			>
				PROJECTS
				<span
					class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
			<div class="gradient-text pb-4 flex flex-col gap-4">
				<p class="mb-4"></p>
			</div>
			<div></div>
		</div>
		<div
			class="flex justify-around items-center text-stone-300 w-full"
		>
			<div
				v-for="(p, index) in projects"
				:key="index"
				class="card cursor-pointer min-w-[150px] mb-4 tracking-wider uppercase"
			>
				<img :src="`./image/${p.link}`" alt="project image" />
				{{ p.name }}
			</div>
		</div>
	</section>
</template>

<style scoped>
	.card {
		max-width: 500px;
		border: 1px solid green;
	}
</style>
