<script setup lang="ts">
	import { ref } from 'vue';
	import { toggleMobileNav } from '../animations';

	const isOpen = ref(true);

	function toggleOpen() {
		toggleMobileNav()
		isOpen.value = !isOpen.value;
	}
</script>
<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen bg-sky-950 px-[25px] z-10"
	>
		<Transition>
			<div
				
				id="overlay"
				class="fixed top-0 right-0 h-screen bg-sky-500 z-20 w-full"
			>
				<ul
					class="flex flex-col items-center gap-y-[20px] h-screen justify-center text-4xl text-modernBlack"
				>
					<li><router-link to="/"></router-link></li>
					<li>
						<a href="#about" @click="toggleOpen()">about</a>
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
					<button class="border-2 border-highGreen p-4">
						RESUME
					</button>
					{{
						isOpen
					}}
				</ul>
			</div>
		</Transition>
		<nav
			class="flex justify-between items-center h-full mx-[20px] container mx-auto"
		>
			<div class="nav-left">
				<h1 id="logo" class="text-highGreen text-2xl font-geist">
					¯\_(ツ)_/¯
				</h1>
			</div>
			<div class="nav-right z-40" @click="toggleOpen">
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
				<!-- <ul class="flex gap-4 text-highGreen text-md tracking-wider">
					<li><router-link to="/"></router-link></li>
					<li><a href="#about">about</a></li>
					<li><a href="#experience">experience</a></li>
					<li><a href="#projects">projects</a></li>
					<li><a href="#contact">contact</a></li>
				</ul> -->
			</div>
		</nav>
	</div>
</template>
<style scoped>
	.nav-right {
		cursor: pointer;
	}

	.nav-right:hover rect {
		transition: all 0.4s ease;
		fill: #234a69;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.4s ease;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateX(100%);
		opacity: 0;
	}
</style>
