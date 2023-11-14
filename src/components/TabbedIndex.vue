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
				class="cursor-pointer min-w-[150px] mb-4 tracking-wider uppercase"
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
			<div
				v-for="(job, index) in data"
				:key="index"
				v-show="activeTab === index"
				class="px-4"
			>
				<h2 class="gradient-text text-xl pb-2 uppercase">
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
		</div>
	</div>
</template>
