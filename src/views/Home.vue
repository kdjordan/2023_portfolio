<template>
	<div
		class="flex flex-col text-stone-300 text-2xl px-4 pb-[25vh] gap-[20px]"
	>
		<div class="text-stone-300 text-lg">Hello 👋 my name is</div>
		<h1 class="text-clampLarge text-highGreen">Kevin Jordan.</h1>

		<div class="text-lg gradient-text">
			I am a Oregon based software engineer that loves bulding digital
			experiences. I am currently working in the telecommunications
			industry managing an International network and a few small
			teams. When I'm not behind the keyboard you can find me in the
			mountains.
		</div>
		<button
			class="text-highGreen self-start text-base border-highGreen border-2 p-4 rounded-md transition duration-150 ease-out hover:ease-in hover:bg-stone-300 hover:text-modernBlack"
		>
			Reach Out
		</button>
	</div>
</template>
<style scoped>
	.gradient-text {
		background: linear-gradient(rgb(214,211,209), rgb(159, 242, 121));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
