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
			class="flex flex-col text-stone-300 pb-[20vh] lg:max-w-[1100px] lg:mx-auto w-full"
		>
			<h2 class="text-highGreen self-start pb-[3rem] w-full text-xl">
				PROJECTS
				<span
					class="bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
		</div>
		<div class="overflox-x-auto">
			<div
				class="flex justify-around items-center text-stone-300 w-full gap-16"
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
		</div>
	</section>
</template>

<style scoped>
	.card {
		max-width: 500px;
		border: 1px solid green;
	}
</style>
