<script setup lang="ts">
	import { ref } from 'vue';
	import data from '../assets/data.ts';

	const activeTab = ref<number>(0);

	function changeTab(index: number) {
		activeTab.value = index;
	}
</script>

<template>
	<div class="flex flex-col justify-start">
		<div
			class="flex gap-4 overflow-x-scroll scrollbar-thin max-w-[440px] mx-auto text-[16px] font-oswald tracking-widest uppercase"
		>
			<button
				v-for="(d, index) in data"
				:key="index"
				@click="changeTab(index)"
				:class="{
					'text-highGreen active-button': activeTab === index,
					'text-stone-300': activeTab !== index,
				}"
				class="cursor-pointer min-w-[200px] mb-4 tracking-wider uppercase"
			>
				{{ d.employer }}
			</button>
		</div>
		<!-- <div
			class="w-full border-highGreen border-b-[1px] w-full overflow-visible mt-[-10px]"
		></div> -->
		<span
			class="block bg-highGreen h-[1px] opacity-40 overflow-visible"
		></span>
		<div class="flex flex-col items-start p-4">
			<TransitionGroup name="list" tag="div" mode="in-out">
				<div
					v-for="(job, index) in data"
					:key="index"
					v-show="activeTab === index"
					class="px-4"
				>
					<h2 class="text-stone-300 text-xl pb-2 uppercase">
						{{ job.title }}
					</h2>
					<div class="text-base pl-4 pb-4">{{ job.dates }}</div>
						<div
							v-for="highlight in job.highlights"
							:key="highlight"
							class="text-stone-400 pb-4 pl-4"
						>
							<span class="text-highGreen">▹</span> {{ highlight }}
						</div>
					
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<style scoped>
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translatex(10px);
	}
</style>
