<script setup lang="ts">
	import { onMounted } from 'vue';

onMounted(() => {
  
  const scrollers: NodeListOf<Element> | null = document.querySelectorAll('.scroller');
  scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", "true")
  })
})

 
	defineProps<{
		arr: string[];
    direction: 'right' | 'left';
    speed: number;
	}>();

</script>
<template>
	<div class="w-full overflow-x-hidden scroller"
  :style="{
      '--scroll-direction': direction === 'right' ? 'reverse' : 'normal',
      '--scroll-speed': speed + 's'
    }"
  >
		<ul class="flex gap-[2rem] py-4 flex-nowrap scrollerInner">
			<li
				v-for="(el, index) in arr"
				:key="index"
				class="inline-block  uppercase text-highGreen text-sizeLg border-2 border-highGreen p-2 rounded-lg bg-sky-900"
			>
				{{ el }}
			</li>
		</ul>
	</div>
</template>

<style scoped>

.scroller {
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scrollerInner {
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