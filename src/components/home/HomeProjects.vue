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
		class="flex flex-col m-auto p-auto"
		style="scroll-margin-top: 100px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[5vh] lg:max-w-[1100px] lg:mx-auto w-full"
		>
			<h2 class="text-highGreen self-start pb-[3rem] w-full text-xl">
				PROJECTS
				<span
					class="bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
		</div>

		<div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
			<div
				class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 gap-16 text-stone-300 cursor-pointer"
			>
				<div
					v-for="(p, index) in projects"
					:key="index"
					class="w-64 h-64 max-w-s overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
				>
					<img :src="`./image/${p.link}`" alt="project image" />
					<h3>{{ p.name }}</h3> 
					<p>{{ p.description }}</p> 
				</div>
			</div>
		</div>
	</section>
</template>


