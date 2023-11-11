<script setup lang="ts">
import { onMounted } from 'vue';
import { fadeInTextBlock } from '../animations';



onMounted(() => {
	fadeInTextBlock('#projects')
})

</script>
<template>
	<section id="projects" class="flex flex-col justify-center pb-[10vh]" style="scroll-margin-top: 200px;">
		<div
			class="flex flex-col  text-stone-300 pb-[20vh] lg:max-w-[750px] lg:mx-auto"
		>
		<h2 class="flex items-center text-highGreen pb-[3rem] w-full text-xl">
			PROJECTS
			<span class="block bg-highGreen h-[1px] ml-4 w-[100%] opacity-40"></span>
		</h2>
		<div class="gradient-text pb-4 flex flex-col gap-4">
			<p class="mb-4">
			
			</p>
		</div>
		<div>
			<div class="flex flex-col text-stone-300">
				<div class="mb-8">
					I am currently migrating all of my old projects to a new unified AWS infrastructure. Check back soon !
				</div>
			</div>
		</div>
		</div>
	</section>
</template>


