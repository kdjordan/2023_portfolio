<template>
	<div class="card">
		<div class="cardInner flex flex-col">
			<a :href="link" target="_blank" rel="noopener noreferrer">
				<img class="rounded-t-lg w-full" :src="imgUrl" alt="" />
			</a>
			<div class="p-5 flex flex-col w-full flex-grow">
				<a :href="link" target="_blank" rel="noopener noreferrer">
					<h5
						class="mb-2 text-2xl tracking-loose text-gray-900 dark:text-highGreen"
					>
						{{ name }}
					</h5>
				</a>
				<p
					class="mb-3 font-normal text-stone-300 max-w-full text-sizeSm"
				>
					{{ description }}
				</p>
				<p
					v-if="notes"
					class="text-sizeSm font-oswald text-fontWhite tracking-wider"
				>
					{{ `#${notes}` }}
				</p>
				<div
					class="flex flex-wrap items-center gap-2 text-highGreen pt-4"
				>
					<span
						v-for="(t, i) in techs"
						:key="i"
						class="text-sizeSm border p-1 rounded-md"
					>
						{{ t }}
					</span>
				</div>
				<div class="pt-2"></div>
				<div
					class="flex gap-4 items-center mt-auto w-full justify-between"
				>
					<a
						:href="link"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-highGreen border bg-sky-900 rounded-lg hover:bg-pageBackground focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
					>
						LIVE
					</a>
					<a
						v-if="github !== null"
						class="text-highGreen"
						:href="github"
						target="_blank"
						rel="noopener noreferrer"
					>
						<font-awesome-icon
							icon="fa-brands fa-github"
							size="2xl"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		imgUrl: string;
		name: string;
		description: string;
		link: string;
		techs: string[];
		github: string | null;
		notes?: string;
	}>();
</script>

<style scoped>
	.card {
		width: 300px;
		height: 600px;
		position: relative;
		overflow: hidden;
		display: block;
		border-radius: 0.5rem;
	}
	.card .cardInner:hover {
		/* transform: translateY(-.2rem); */
		box-shadow: 8px 14px 31px -3px rgba(255, 255, 255, 0.3);
	}
	.card::before {
		content: '';
		display: block;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(191, 190, 190, 0.75) 30%,
			rgba(255, 255, 255, 0) 100%
		);
		height: 100%;
		width: 100%;
		transform: translate(0);
		position: absolute;
		animation: rotate 5s linear forwards infinite;
		z-index: 0;
		top: 50%;
		transform-origin: top center;
	}

	.cardInner {
		background: #222;
		color: #fff;
		border-radius: 0.5rem;
		position: relative;
		z-index: 1;
		height: 595px;
		width: 295px;
		margin: 0 auto;
		margin-top: 2.5px;
	}

	@keyframes rotate {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
