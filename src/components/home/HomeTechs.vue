<script setup lang="ts">
import { onMounted } from 'vue';
import { fadeInTextBlock } from '../../animations';

import InfinteScroller from '../InfinteScroller.vue';

const currentTechs = ['Typescript', 'Tailwind', 'React', 'Vue', 'Node', 'Express', 'Wordpress', 'HTML', 'CSS', 'JS', 'Amplify', 'AWS', 'CI/CD', 'ThreeJS', 'Adobe']
const previousTechs = ['PHP', 'C++', 'MS', 'Wordpress', 'SCSS', 'JAVA']

onMounted(() => {
	fadeInTextBlock('#techs')
})

</script>
<template>
	<section 
		id="techs" 
		class="flex flex-col justify-center pb-[15vh]" 
		style="scroll-margin-top: 100px;"
		>
		<div
			class="flex flex-col text-stone-300 pb-[2vh] lg:max-w-[1100px] lg:mx-auto w-full"
		>
		<h2 class="flex items-center text-highGreen pb-[3rem] w-full text-sizeLg">
			TECHS
			<span class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"></span>
		</h2>
		<div class="gradient-text pb-4 flex flex-col gap-4 leading-loose w-full">
			
		</div>
		<div>
			<div class="flex flex-col text-stone-300">
				<!-- <div class="mb-8">
					Here are the techs that I've been working with lately
					:
				</div> -->
				<div>
				<InfinteScroller :arr="currentTechs" direction="right" :speed=50 />
				<div class="py-4"></div>
				<InfinteScroller :arr="previousTechs" direction="left" :speed=20 />
					<!-- <ul
						class="grid grid-cols-2 gap-x-16 gap-y-2 p-0 list-none overflow-hidden"
					>
						<li><span>🤟 </span>JavaScript</li>
						<li><span>🤟 </span>Vue 3</li>
						<li><span>🤟 </span>Node/Express</li>
						<li><span>🤟 </span>React</li>
						<li><span>🤟 </span>Tailwind</li>
						<li><span>🤟 </span>Typescript</li>
						<li><span>🤟 </span>GSAP</li>
						<li><span>🤟 </span>Amplify</li>
						<li><span>🤟 </span>Postgres</li>
						<li><span>🤟 </span>Wordpress</li>
					</ul> -->
				</div>
			</div>
		</div>
		</div>
	</section>
</template>


