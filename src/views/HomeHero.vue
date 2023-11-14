<template>
	<section
		id="hero"
		class="flex flex-col h-screen justify-center items-center"
	>
		<div class="flex flex-col text-stone-300 gap-[20px]">
			<div class="text-stone-300">
				Hello <span id="handWave">👋</span> my name is
			</div>
			<h1 class="text-clampLarge text-highGreen">Kevin Jordan.</h1>

			<div class="gradient-text">
				I am a Oregon based software engineer that loves bulding
				digital experiences. I am currently working in the
				telecommunications industry managing an International VOIP
				network and a few small teams. When I'm not behind the
				keyboard you can find me in the mountains.
			</div>
			<button
				class="text-highGreen self-start text-base border-2 p-4 rounded-md transition duration-150 ease-out hover:ease-in hover:bg-sky-900"
			>
				Reach Out
			</button>
		</div>
	</section>
</template>
<style scoped>
#hero {
	opacity: 0;
}
</style>

