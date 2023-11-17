<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.to('.logo', {
  x: 10, 
  rotate: 20,
  delay: 3,
  repeat: -1,
  duration: 3,  
  ease: 'elastic.easeOut',
  yoyo: true
});
})


</script>

<template>
	<div class="flex">
		<span class="logo">¯</span>
    <span class="logo">\</span>
    <span class="logo">_</span>
    <span class="logo">(</span>
    <span class="logo">ツ</span>
    <span class="logo">)</span>
    <span class="logo">_</span>
    <span class="logo">/</span>
    <span class="logo">¯</span>
	</div>
</template>


