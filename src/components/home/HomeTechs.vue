<script setup lang="ts">
	import { onMounted } from 'vue';
	import { fadeInTextBlock } from '../../animations';

	import InfinteScroller from '../InfinteScroller.vue';

	const currentTechs = [
		'Typescript',
		'Tailwind',
		'React',
		'Vue',
		'Node',
		'Express',
		'Wordpress',
		'HTML',
		'CSS',
		'JS',
		'Amplify',
		'AWS',
		'CI/CD',
		'ThreeJS',
		'Adobe',
		'Postgres',
	];
	const previousTechs = [
		'LAMP',
		'PHP',
		'MongoDB',
		'DynamoDB',
		'Serverless',
		'C++',
		'MS',
		'Wordpress',
		'SCSS',
		'JAVA',
		'MySQL',
		'SQL'
	];

	onMounted(() => {
		fadeInTextBlock('#techs');
	});
</script>
<template>
	<section
		id="techs"
		class="flex flex-col justify-center pb-[15vh]"
		style="scroll-margin-top: 100px"
	>
		<div
			class="flex flex-col text-stone-300 pb-[2vh] lg:max-w-[1100px] lg:mx-auto w-full"
		>
			<h2
				class="flex items-center text-highGreen pb-[3rem] w-full text-sizeLg"
			>
				TECHS
				<span
					class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"
				></span>
			</h2>
			<div>
				<div class="flex flex-col text-stone-300">
					<div>
						<InfinteScroller
							:arr="currentTechs"
							direction="right"
							:speed="50"
						/>
						<InfinteScroller
							:arr="previousTechs"
							direction="left"
							:speed="20"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
