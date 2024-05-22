<template>
	<div
		class="flex flex-col h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<a :href="props.link" target="_blank" rel="noopener noreferrer">
			<img
				class="rounded-t-lg w-full margin-auto"
				:src="props.imgUrl"
				alt=""
			/>
		</a>
		<div class="p-5 flex-col h-full">
			<a :href="props.link" target="_blank" rel="noopener noreferrer">
				<h5
					class="mb-2 text-2xl tracking-loose text-gray-900 dark:text-highGreen"
				>
					{{ name }}
				</h5>
			</a>
			<p
				class="mb-3 font-normal text-stone-300 max-w-full line-clamp-3"
			>
				{{ props.description }}
			</p>
			<div class="mt-auto">
				<a
					href=""
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-canvasBlue rounded-lg hover:bg-pageBackground focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
				>
					Read more
					<svg
						class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
  imgUrl: string;
  name: string;
  description: string;
  link: string;
}

const props = defineProps<Props>();
</script>
