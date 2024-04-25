<script setup lang="ts">
	import { ref } from 'vue';
	import data from '../assets/data.ts';
	import { animateJobChange } from '../animations.ts';
	const activeTab = ref<number>(0);

	function changeTab(index: number) {
		activeTab.value = index;
		animateJobChange();
	}
</script>

<template>
	<div class="flex flex-col justify-start">
		<div
			id="scroller"
			class="flex gap-4 overflow-x-auto scrollbar w-full text-[16px] font-oswald tracking-widest uppercase"
		>
			<button
				v-for="(d, index) in data"
				:key="index"
				@click="changeTab(index)"
				:class="{
					'text-highGreen active-button': activeTab === index,
					'text-stone-300': activeTab !== index,
				}"
				class="cursor-pointer min-w-[150px] mb-4 tracking-wider uppercase truncate"
			>
				{{ d.employer }}
			</button>
		</div>
		<span
			class="block bg-highGreen h-[1px] opacity-40 overflow-visibl mb-4"
		></span>
		<div class="flex flex-col items-start p-4 min-h-[400px]">
			<div
				v-for="(job, index) in data"
				:key="index"
				id="job"
				v-show="activeTab === index"
				class="px-4 gradient-text"
			>
				<h2 class="text-xl pb-2 uppercase">
					{{ job.title }}
				</h2>
				<div class="pl-4 pb-4">{{ job.dates }}</div>
				<div
					v-for="highlight in job.highlights"
					:key="highlight"
					class="pb-4 pl-4"
				>
					<div class="flex items-top">
						<div class="pr-2">
							<span class="text-highGreen">▹</span>
						</div>
						<div>
							{{ highlight }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	#scroller {
		scrollbar-color: red important;
	}
</style>
