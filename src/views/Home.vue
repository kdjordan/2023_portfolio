<template>
	<section
		class="flex flex-col h-screen justify-center items-center pr-[5vw] lg:pr-[20vw]"
	>
		<div
			class="flex flex-col text-stone-300 text-2xl px-4 pb-[20vh] gap-[20px] md:gap-[40px] lg:max-w-[750px] lg:mx-auto"
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
				class="text-highGreen self-start text-base border-2 p-4 rounded-md transition duration-150 ease-out hover:ease-in hover:bg-stone-300 hover:text-modernBlack"
			>
				Reach Out
			</button>
		</div>
	</section>
	<section class="flex flex-col items-start px-4">
		<div
			class="flex items-end text-2xl text-highGreen pb-[5vh]"
		>
			ABOUT<span class="block mb-[5px] ml-[10px] h-[2px] w-[200px] bg-highGreen opacity-40"></span>
		</div>
		<div class="text-lg gradient-text pb-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Exercitationem, illum at quaerat veniam deleniti consequuntur
			tempora dicta aperiam expedita dolorum tempore voluptatibus
			culpa odio in dolor, alias, ipsam velit doloribus.
		</div>
		<div class="text-lg gradient-text pb-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Exercitationem, illum at quaerat veniam deleniti consequuntur
			tempora dicta aperiam expedita dolorum tempore voluptatibus
			culpa odio in dolor, alias, ipsam velit doloribus.
		</div>
		<div>
			<div class="flex flex-col gradient-text">
				<div class="mb-8">
					Here are the technologies that I've ben working with lately
					:
				</div>
				<div>
					<ul
						class="grid grid-cols-2 gap-x-16 gap-y-2 p-0 list-none overflow-hidden"
					>
						<li><span>🤟 </span>JavaScript</li>
						<li><span>🤟 </span>Vue 3</li>
						<li><span>🤟 </span>Node/Express</li>
						<li><span>🤟 </span>React</li>
						<li><span>🤟 </span>Tailwind</li>
						<li><span>🤟 </span>Amplify</li>
						<li><span>🤟 </span>Postgres</li>
						<li><span>🤟 </span>Wordpress</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- border border-2-highGreen  -->
</template>
<style scoped>
	.gradient-text {
		background: linear-gradient(
			rgb(214, 211, 209),
			rgb(159, 242, 121)
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	/* li::before {
		content: "▹";
    position: absolute;
    left: 0px;
    color: red;
    font-size: 16px;
    line-height: 12px;
	} */
</style>
