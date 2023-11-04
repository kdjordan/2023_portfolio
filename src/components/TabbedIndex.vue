<script setup lang="ts">
	import { ref } from 'vue';

	const activeTab = ref<number>(0);
	const tabs: string[] = [
		'V-Tell',
		'NW Straps',
		'3Charm',
		'Rena',
		'CatalogFinder',
	];

	const content: string[] = [
		'V-Tell is a web application that allows users to search for and view the details of products from a variety of online stores.',
		'NW Straps is a web application that allows users to search for and view the details of products from a variety of online stores.',
		'3Charm is a web application that allows users to search for and view the details of products from a variety of online stores.',
		'Rena is a web application that allows users to search for and view the details of products from a variety of online stores.',
		'CatalogFinder is a web application that allows users to search for and view the details of products from a variety of online stores.'
	];

	function changeTab(index: number) {
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
				v-for="(desc, index) in content"
				:key="index"
				v-show="activeTab === index"
			>
				{{ desc }}
			</p>
		</div>
	</div>
</template>
