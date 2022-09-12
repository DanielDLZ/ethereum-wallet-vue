<template>
  <div class="flex justify-between items-center">
    <template v-for="index in stepsCount" :key="index">
      <div
        class="wh rounded-full text-center pt-2 border border-emerald-400 dark:border-yellow-200"
        :class="
          index > stepPassed
            ? currentStep === index
              ? 'bg-emerald-400 dark:text-slate-900 dark:bg-yellow-200'
              : ''
            : 'bg-emerald-400 dark:text-slate-900 dark:bg-yellow-200'
        "
      >
        <div
          class="absolute top-11 text-sm w-16 text-emerald-400 font-bold dark:text-violet-200 text-left"
        >
          {{ `${hints[index - 1]}` }}
        </div>
        <Transition mode="out-in">
          <span v-if="index > stepPassed" class="font-bold">{{ index }}</span>
          <font-awesome-icon icon="fa-solid fa-check" v-else />
        </Transition>
      </div>
      <div
        class="grow mx-4 last:hidden bg-emerald-400 dark:bg-yellow-200 h-px"
      ></div>
    </template>
  </div>
</template>

<script setup>
//TODO: прописать даркмод для хинтов

import { computed, ref } from "vue";

const props = defineProps({
  stepsCount: {
    type: Number,
    requred: false,
    validator(value) {
      return value > 1;
    },
    default: 3,
  },
  currentStep: {
    type: Number,
    requred: true,
  },
  hints: {
    type: Array,
    requred: false,
  },
});

const stepPassed = computed(() => {
  return props.currentStep - 1;
});
</script>

<style scoped>
.wh {
  height: 40px;
  width: 40px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
