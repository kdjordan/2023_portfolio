<script setup lang="ts">
	import { gsap } from 'gsap';
	import { onMounted } from 'vue';

	onMounted(() => {
		let flag: boolean = true;
		if (flag) {
			const tl = gsap.timeline();
			tl.set(['#copy', 'button'], { opacity: 0, y:100 });
			tl.to('#copy', { delay: 3.5, opacity: 1, duration: 2, ease: "power1.out",  y:0});
			tl.to('button', {  opacity: 1, duration: 1, ease: "power1.out",  y:0});
		}
	});

</script>
<template>
	<section
		class="flex flex-col h-screen justify-center items-center pr-[5vw] lg:pr-[20vw] px-4 "
	>
		<div id="copy"
			class="flex flex-col text-stone-300 text-2xl pb-[20vh] gap-[20px] md:gap-[40px] lg:max-w-[750px] lg:mx-auto"
		>
			<div class="text-stone-300 text-lg">Hello 👋 my name is</div>
			<h1 class="text-clampLarge text-highGreen">Kevin Jordan.</h1>

			<div class="text-lg gradient-text">
				I am a Oregon based software engineer that loves bulding
				digital experiences. I am currently working in the
				telecommunications industry managing an International network
				and a few small teams. When I'm not behind the keyboard you
				can find me in the mountains.
			</div>
			<button
				class="text-highGreen self-start text-base border-2 p-4 rounded-md transition duration-150 ease-out hover:ease-in hover:bg-sky-900"
			>
				Reach Out
			</button>
		</div>
	</section>
	<HomeAbout />
	<!-- border border-2-highGreen  -->
</template>

