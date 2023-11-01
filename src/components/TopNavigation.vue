<script setup lang="ts">
	import Name from './Name.vue';
	import { gsap } from 'gsap';
	import { onMounted } from 'vue';

	let dropOpen: boolean = false;

	onMounted(() => {
		let flag: boolean = true;
		if (flag) {
			const tl = gsap.timeline();
			tl.set('.top-nav', { opacity: 0, borderBottom: 'none' });
			tl.to('.top-nav', { delay: 2, opacity: 1, duration: 1 });
			tl.to('.top-nav', { borderBottom: '1px solid #9FF279' });
		}
	});

	function toggleDropdown() {
		dropOpen = !dropOpen;
		console.log('toggled', dropOpen);
	}
</script>

<template>
	<div
		class="top-nav fixed top-0 left-0 w-full h-16 font-oswald border-b border-highGreen bg-sky-950"
	>
		<nav
			class="flex justify-between items-center h-full mx-[20px] container mx-auto"
		>
			<div class="nav-left">
				<Name />
			</div>
			<div class="nav-right">
				<ul class="flex gap-4 text-highGreen text-md uppercase">
					<li><router-link to="/"></router-link></li>
					<li><a href="#about">about</a></li>
					<li><a href="#about">experience</a></li>
					<li><a href="#about">work</a></li>
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
					<li @click="toggleDropdown">
						<font-awesome-icon icon="fa-solid fa-at" size="xl" />
					</li>
				</ul>
			</div>
			<div
				class="absolute top-20 right-5 text-highGreen"
			>
				<ul v-if="dropOpen" class="flex flex-col gap-2">
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
				</ul>
			</div>
		</nav>
	</div>
</template>
