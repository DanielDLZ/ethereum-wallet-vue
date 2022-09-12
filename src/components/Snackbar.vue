<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="w-full flex flex-row justify-around items-center fixed bottom-0 z-[100] text-center py-8 text-slate-50 font-semibold text-lg"
      :class="[computedSnackType]"
    >
      <span>{{ text }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watch, ref } from "vue";
import { useGlobalStore } from "@/stores/global";

const globalStore = useGlobalStore();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  snackType: {
    type: String,
    required: false,
    default: "info",
    validator(value) {
      return ["info", "success", "danger", "warning"].includes(value);
    },
  },
  isVisible: {
    type: Number,
    required: true,
    default: false,
  },
  snackDuration: {
    type: Number,
    required: false,
    default: 2000,
  },
});

const computedSnackType = computed(() => {
  let result = "";
  switch (props.snackType) {
    case "info":
      result = "bg-blue-400";
      break;
    case "success":
      result = "bg-emerald-400";
      break;
    case "danger":
      result = "bg-red-400";
      break;
    case "warning":
      result = "bg-yellow-400";
      break;
  }

  return result;
});

let activeTimeout = 0;

watch(
  () => props.isVisible,
  (isVisible) => {
    if ([1, 2].includes(isVisible)) {
      clearTimeout(activeTimeout);

      activeTimeout = setTimeout(() => {
        globalStore.resetSnack();
      }, props.snackDuration);
    }
  }
);
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(92px);
}
</style>
