<script setup lang="ts">
import { onMounted } from 'vue';
import { fadeInTextBlock } from '../../animations';

onMounted(() => {
	fadeInTextBlock('#about')
})

</script>
<template>
	<section 
		id="about" 
		class="flex flex-col justify-center pb-[15vh]" 
		style="scroll-margin-top: 100px;"
		>
		<div
			class="flex flex-col text-stone-300 pb-[2vh] lg:max-w-[1100px] lg:mx-auto"
		>
		<h2 class="flex items-center text-highGreen pb-[3rem] w-full text-sizeLg">
			ABOUT
			<span class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"></span>
		</h2>
		<div class="gradient-text pb-4 flex flex-col gap-4 leading-loose">
			<p class="mb-4">
				Thanks for checking in...<br />
				I've been building things in various industries for a while
				now, and I'm always up for a challenge. Because of that, I've
				had to get good at things like : coding, branding, design,
				personnel management, technical infrastructure design,
				accounting, commercial sales, system design, and whatever else
				was needed to make things work.
			</p>
			<p>
				Need a watermark on that PDF and make it secure ?<br /> 
				- Let me know.
			</p>
			<p>
				Need a better workflow to handle tax reporting ?<br /> 
				- Got your solution...
			</p>
			<p>
				Oh - we need a logo and visual identity for the company ?<br /> 
				- BRB.
			</p>
			<p>
				How about a React/Vue app with an Express API using Auth0 for
				authentication and authorization strung up on AWS ?<br /> 
				- npm create vite@latest
				<p>
				Oh - should we go all in on AWS and go serverless with Lambda, Cognito, and Dynanmo DB ?<br /> 
				- Let's hash it out...
				</p>
			</p>
			<p class="mb-[5vh]">Simple landing page ? Wordpress ? Funnels ? <br />
			- Let's go...
			</p>
		</div>
		<div>
			<div class="flex flex-col text-stone-300">
				<div class="mb-8">
					Here are the techs that I've been working with lately
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
						<li><span>🤟 </span>Typescript</li>
						<li><span>🤟 </span>GSAP</li>
						<li><span>🤟 </span>Amplify</li>
						<li><span>🤟 </span>Postgres</li>
						<li><span>🤟 </span>Wordpress</li>
					</ul>
				</div>
			</div>
		</div>
		</div>
	</section>
</template>


