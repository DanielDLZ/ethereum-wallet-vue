<template>
  <button
    class="px-4 py-6 rounded-sm duration-200 font-semibold disabled:cursor-not-allowed md:py-2"
    :class="outline ? outlineClass : defaultClass"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

const outlineClass = ref([
  "bg-transparent",
  "border-2",
  "border-emerald-300",
  "text-zinc-900",
  "hover:bg-red-300",
  "hover:border-red-300",
  "dark:border-yellow-300",
  "dark:text-yellow-300",
  "dark:hover:text-zinc-900",
  "dark:hover:bg-yellow-200",
  "dark:hover:border-yellow-200",
  "dark:disabled:bg-yellow-100",
  "dark:disabled:border-yellow-100",
  "dark:disabled:text-zinc-500",
]);

const defaultClass = ref([
  "bg-emerald-300",
  "text-zinc-900",
  "hover:bg-red-300",
  "disabled:bg-emerald-100",
  "dark:bg-yellow-300",
  "dark:hover:bg-yellow-200",
  "dark:text-zinc-900",
  "dark:disabled:bg-yellow-100",
  "dark:disabled:text-zinc-500",
]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
    require: false,
  },
  outline: {
    type: Boolean,
    default: false,
    require: false,
  },
});
</script>
