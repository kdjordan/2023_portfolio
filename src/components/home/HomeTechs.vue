<script setup lang="ts">
  import { onMounted } from 'vue';
  import { fadeInTextBlock } from '../../animations';
  import { currentTechs, previousTechs } from '../../assets/data/techs';
  import InfinteScroller from '../InfinteScroller.vue';

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
    <div class="flex flex-col text-gray-200 pb-[2vh] w-full">
      <h2 class="flex items-center text-primary-white pb-[3rem] w-full text-sizeLg whitespace-nowrap">
        TECHS I'VE USED
        <span class="block bg-highGreen h-[1px] ml-4 w-full opacity-40"></span>
      </h2>

      <div>
        <div class="flex flex-col text-gray-200">
          <div>
            <InfinteScroller
              :arr="currentTechs"
              direction="right"
              :speed="70"
            />
            <InfinteScroller
              :arr="previousTechs"
              direction="left"
              :speed="70"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
