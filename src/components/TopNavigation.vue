<script setup lang="ts">
	import { ref } from 'vue';
	import { toggleMobileNav } from '../animations';

	const isOpen = ref(false);

	function toggleOpen() {
		isOpen.value = !isOpen.value;
		toggleMobileNav(isOpen.value);
	}
</script>
<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen bg-sky-950 z-10"
	>
		<div
			id="overlay"
			class="fixed top-0 right-0 bg-sky-500 z-20 w-full h-screen translate-x-[100%]"
		>
			<ul
				class="border flex flex-col justify-center items-center gap-y-[20px] fixed top-0 left-0 text-4xl text-modernBlack h-screen w-full"
			>
				<li>
					<a href="#about" @click="toggleOpen">about</a>
				</li>
				<li>
					<a href="#experience" @click="toggleOpen">experience</a>
				</li>
				<li>
					<a href="#projects" @click="toggleOpen">projects</a>
				</li>
				<li>
					<a href="#contact" @click="toggleOpen">contact</a>
				</li>
				<button class="border-2 border-highGreen p-4">RESUME</button>
			</ul>
		</div>
		<nav class="flex justify-between px-4 items-center h-full">
			<div class="nav-left">
				<h1 id="logo" class="text-highGreen text-2xl font-geist">
					¯\_(ツ)_/¯
				</h1>
			</div>
			<div class="nav-right z-30" @click="toggleOpen">
				<svg
					viewBox="0 0 90 70"
					width="40"
					height="40"
					fill="#9FF279"
				>
					<rect id="upper" x="15" width="75" height="6" rx="8"></rect>
					<rect
						id="middle"
						x="40"
						y="25"
						width="50"
						height="6"
						rx="8"
					></rect>
					<rect
						id="lower"
						x="65"
						y="50"
						width="25"
						height="6"
						rx="8"
					></rect>
				</svg>
			</div>
		</nav>
	</div>
</template>
