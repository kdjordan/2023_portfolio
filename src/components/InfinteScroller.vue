<script setup lang="ts">
	import { emojis } from '../assets/data/techs';

	function getRandomEmoji() {
		const randomIndex = Math.floor(Math.random() * emojis.length);
		return emojis[randomIndex];
	}

	defineProps<{
		arr: string[];
		direction: 'right' | 'left';
		speed: number;
	}>();
</script>
<template>
	<div
		class="w-full overflow-x-hidden scroller"
		:style="{
			'--scroll-direction':
				direction === 'right' ? 'reverse' : 'normal',
			'--scroll-speed': speed + 's',
		}"
	>
		<ul class="flex gap-8 py-4 flex-nowrap scrollerInner">
			<li
				v-for="(el, index) in arr"
				:key="index"
				class="flex items-center gap-2 uppercase text-highGreen text-sizeLg border-2 border-highGreen p-2 rounded-lg bg-sky-900"
			>
				<span>{{ getRandomEmoji() }} </span>{{ el }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.scroller {
		mask: linear-gradient(
			90deg,
			transparent,
			white 20%,
			white 80%,
			transparent
		);
	}

	.scrollerInner {
		width: fit-content;
		animation: scroll var(--scroll-speed) linear infinite;
		flex-wrap: nowrap;
		animation-direction: var(--scroll-direction);
	}

	@keyframes scroll {
		to {
			transform: translateX(calc(-50% - 1rem));
		}
	}
</style>
