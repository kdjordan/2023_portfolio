<template>
	<section
		id="hero"
		class="flex flex-col py-[15vh] justify-center items-center"
	>
		<div class="flex flex-col text-stone-300 lg:max-w-[1100px] lg:mx-auto">
			<div class="text-stone-300">
				Hey there <span id="handWave">👋</span> my name is
			</div>
			<h1 class="lg:text-size6xl text-size5xl text-highGreen whitespace-nowrap">Kevin Jordan.</h1>

			<div class="gradient-text leading-loose text-sizeBase pb-[2vh]">
				I am an Oregon based technologist that loves building
				software and companies.<br />
				Currently, I work in the telecommunications industry, managing an both a US domestic and an International VOIP network, with a small agile team.<br />
				Outside of work, I'm the creative force behind several entrepreneurial ventures, realizing ideas...<br />
				When I'm not coding or building, you can find me exploring mountains and beaches.
			</div>
			<button
				class="text-highGreen self-start text-base border-2 p-4 rounded-md transition duration-150 ease-out hover:ease-in hover:bg-sky-900"
			>
				<a  target=”_blank” rel="noopener noreferrer" href="mailto:k.dean.jordan@gmail.com">SAY HI !</a>
			</button>
		</div>
	</section>
</template>
<style scoped>
#hero {
	opacity: 0;
}
</style>

