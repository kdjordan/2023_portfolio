<script setup lang="ts">
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';

	onMounted(() => {
		fadeInTextBlock('#contact');
	});
</script>
<template>
	<section
		id="contact"
		class="flex flex-col justify-center pb-[10vh]"
		style="scroll-margin-top: 200px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[20vh] lg:max-w-[750px] lg:mx-auto"
		>
			<h2
				class="flex items-center text-highGreen pb-[3rem] w-full text-xl"
			>
				CONTACT
				<span
					class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
			<div class="gradient-text pb-4 flex flex-col gap-4">
				<p class="mb-4"></p>
			</div>
			<div>
				<div class="flex flex-col text-stone-300 justify-center items-center">
					<div class="mb-8 text-center gradient-text mb-16">
						If you are working on something interesting, I'd like to hear about it.
					</div>
					
					<a href="mailto:k.dean.jordan@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						>
						<button class="border-2 border-highGreen p-4">DROP IN</button>
						</a>
				</div>
			</div>
		</div>
	</section>
</template>
