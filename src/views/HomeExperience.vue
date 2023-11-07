<script setup lang="ts">
import TabbedIndex from '../components/TabbedIndex.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap/gsap-core';


onMounted(() => {
	gsap.from('#experience', { opacity:0, duration:2, ease:'power1.out', scrollTrigger: {
		trigger: '#experience',
		start: 'top 75%'
	}})
})

</script>
<template>
	<section id="experience" class="">
		<div
			class="flex flex-col items-center text-stone-300 pb-[20vh] lg:max-w-[750px] lg:mx-auto"
		>
			<h2 class="text-2xl text-highGreen pb-[30px] center flex items-baseline">
				
				<span class="block bg-highGreen h-[1px] w-[300px] mb-[5px] mr-[10px] opacity-40"></span>
				WORK EXPERIENCE
			</h2>
			<TabbedIndex />
		</div>
	</section>
</template>
