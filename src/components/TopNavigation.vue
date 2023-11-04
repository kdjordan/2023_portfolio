<script setup lang="ts">
	import { gsap } from 'gsap';
	import { onMounted } from 'vue';
	
	onMounted(() => {
		let flag: boolean = false;

		if (flag) {
			const tl = gsap.timeline();
			tl.set('.top-nav', { opacity: 0, borderBottom: 'none',  y: -100, x: -1000 });
			tl.to('.top-nav', { opacity: 1, duration: 1 , y:0 , x:0 });
			tl.to('.top-nav', {
				borderBottom: '1px solid #9FF279',
				duration: 0.25,
			});
		}
	});
</script>

<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen bg-sky-950 px-[10px] z-10"
	>
		<nav
			class="flex justify-between items-center h-full mx-[20px] container mx-auto"
		>
			<div class="nav-left">
				<h1 class="text-highGreen text-2xl font-geist" id="#name">
				 ¯\_(ツ)_/¯
				</h1>
			</div>
			<div class="nav-right">
				<ul class="flex gap-4 text-highGreen text-md">
					<li><router-link to="/"></router-link></li>
					<li><a href="#about">about</a></li>
					<li><a href="#experinece">experience</a></li>
					<li><a href="#projects">projects</a></li>
					<!-- <li>
						<a
							href="https://github.com/kdjordan"
							target="_blank"
							rel="noopener noreferrer"
							><font-awesome-icon
								icon="fa-brands fa-github"
								size="xl"
						/></a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/kevin-dean-jordan/"
							target="_blank"
							rel="noopener noreferrer"
							><font-awesome-icon
								icon="fa-brands fa-linkedin"
								size="xl"
						/></a>
					</li> -->
					<!-- <li @click="toggleDropdown">
						<font-awesome-icon icon="fa-solid fa-at" size="xl" />
					</li> -->
				</ul>
			</div>
			<div class="absolute top-20 right-5 text-highGreen">
				<!-- <ul v-if="dropOpen" class="flex flex-col gap-2">e
					<li>
						<a
							href="https://github.com/kdjordan"
							target="_blank"
							rel="noopener noreferrer"
							><font-awesome-icon
								icon="fa-brands fa-github"
								size="xl"
						/></a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/kevin-dean-jordan/"
							target="_blank"
							rel="noopener noreferrer"
							><font-awesome-icon
								icon="fa-brands fa-linkedin"
								size="xl"
						/></a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/kevin-dean-jordan/"
							target="_blank"
							rel="noopener noreferrer"
							><font-awesome-icon
								icon="fa-solid fa-envelope"
								size="xl"
						/></a>
					</li>
				</ul> -->
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
