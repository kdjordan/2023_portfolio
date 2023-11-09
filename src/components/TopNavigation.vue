<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function toggleOpen() {
	isOpen.value =!isOpen.value;
	console.log('opening', isOpen.value)
}
</script>
<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen bg-sky-950 px-[25px] z-10"
	>
		<nav
			class="flex justify-between items-center h-full mx-[20px] container mx-auto"
		>
			<div class="nav-left">
				<h1 id="logo" class="text-highGreen text-2xl font-geist">
					¯\_(ツ)_/¯
				</h1>
			</div>
			<div class="nav-right" @click="toggleOpen" ref="isOpen">
				<svg 
					viewBox="0 0 90 70"
					width="40"
					height="40"
					fill="#9FF279"
				>
					<rect id="rect-top" x="15" width="75" height="6" rx="8"></rect>
					<rect id="rect-mid" x="40" y="25" width="50" height="6" rx="8"></rect>
					<rect id="rect-bot" x="65" y="50" width="25" height="6" rx="8"></rect>
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
.nav-right{
	cursor: pointer;
}

.nav-right:hover rect { 
	transition: all .4s ease;
	fill: red;
}
</style>
