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
				class="flex flex-wrap items-center justify-center gap-32 md:gap-24"
			>
				<div
					v-for="(p, index) in projects"
					:key="index"
					class="h-48 w-48 block mb-4"
				>
					<a :href="`${p.link}`" target="_blank" rel="nofollow" >
						<img :src="`./image/${p.image}`" alt="project image" class="hover:border-xl rounded-lg"/>
					<h3 class="text-highGreen pt-4 pb-2 uppercase">{{ p.name }}</h3>
					<div class="text-stone-300">{{ p.description }}</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
