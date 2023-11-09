<script setup lang="ts">

function toggleOpen() {
	console.log('OPENING menu')
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
			<div class="nav-right">
				<svg @click="toggleOpen"
					viewBox="0 0 90 70"
					width="40"
					height="40"
					fill="#9FF279"
				>
					<rect width="75" height="6" rx="8"></rect>
					<rect y="25" width="75" height="6" rx="8"></rect>
					<rect y="50" width="75" height="6" rx="8"></rect>
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
		fill: #075985;
		transition: all 0.3s ease;
	}
</style>
