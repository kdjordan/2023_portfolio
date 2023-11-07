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
				<ul class="flex gap-4 text-highGreen text-md tracking-wider">
					<li><router-link to="/"></router-link></li>
					<li><a href="#about">about</a></li>
					<li><a href="#experinece">experience</a></li>
					<!-- <li><a href="#projects">projects</a></li>
					<li><a href="#contact">contact</a></li> -->
				</ul>
			</div>
		</nav>
	</div>
</template>
<style scoped>
	li:hover {
		color: #075985;
		transition: all 0.5s ease;
	}
</style>
