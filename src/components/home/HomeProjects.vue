<script setup lang="ts">
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';
	import projects from '../../assets/data/projects.ts';
	import Card from '../Card.vue';

	onMounted(() => {
		fadeInTextBlock('#projects');
	});
</script>
<template>
	<section
		id="projects"
		class="flex flex-col pb-[15vh] overflow-x-scroll"
		style="scroll-margin-top: 100px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[5vh] w-full"
		>
			<h2
				class="flex items-center text-highGreen pb-[3rem] w-full text-sizeLg whitespace-nowrap"
			>
				SOME THINGS I'VE BUILT
				<span
					class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
		</div>
		<div class="pb-10 flex overflow-x-scroll scroller" >
			<div
				class="flex flex-nowrap gap-4"
				id="scrollerContainer"
			>
				<div v-for="(p, index) in projects" :key="index">
					<Card
						:imgUrl="`./image/${p.image}`"
						:name="p.name"
						:description="p.description"
						:link="p.link"
						:techs="p.techs"
						:github="p.github"
						:notes="p.notes"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

