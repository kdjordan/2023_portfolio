<script setup lang="ts">
	import { ref } from 'vue';

	const activeTab = ref(0);
	const tabs = [
		'V-Tell',
		'NW Straps',
		'3Charm',
		'Rena',
		'CatalogFinder'
	];

	function changeTab(index) {
		activeTab.value = index;
	}
</script>

<template>
	<div class="flex justfy-center items-top min-h-[340px] gap-16">
		<div
			class="flex flex-col items-start justify-top min-w-max gap-8 pr-8"
		>
			<button
				v-for="(tab, index) in tabs"
				:key="index"
				@click="changeTab(index)"
				:class="{
					'text-highGreen border-l-2 border-highGreen pl-[4px] ':
						activeTab === index,
					'pl-[4px] text-stone-300': activeTab !== index,
				}"
				class="cursor-pointer"
			>
				{{ tab }}
			</button>
		</div>
		<div class="flex flex-col items-start">
			<p
				v-for="(tab, index) in tabs"
				:key="index"
				v-show="activeTab === index"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Voluptatum aliquam provident magni odio alias tenetur,
				pariatur molestiae reprehenderit eos obcaecati doloremque,
				impedit repellendus, culpa modi quisquam exercitationem
				incidunt iure dolore! Content for {{ tab }}
			</p>
			
		</div>
	</div>
</template>
