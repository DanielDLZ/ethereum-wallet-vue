<template>
  <div class="mx-4 my-2 flex items-center">
    <input
      :class="[radioClass]"
      type="radio"
      :checked="checked"
      :disabled="disabled"
      :value="value"
      :name="name"
      :id="id"
      @input="handleClick($event)"
    />
    <label
      class="ml-3 text-md cursor-pointer font-medium disabled:cursor-not-allowed text-gray-900 dark:text-gray-300"
      :for="id"
      >{{ label }}
    </label>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const radioClass = [
  "w-6",
  "h-6",
  "cursor-pointer",
  "duration-200",
  "disabled:cursor-not-allowed",
  "appearance-none",
  "rounded-full",
  "ring-4",
  'ring-inset',
  "ring-offset-2",
  "ring-offset-emerald-300",
  "bg-gray-100",
  "ring-gray-50",
  "hover:bg-emerald-200",
  "disabled:hover:bg-gray-100",
  "checked:hover:bg-emerald-300",
  "checked:bg-emerald-300",
  "disabled:ring-gray-100",
  "disabled:ring-offset-gray-400",
  "disabled:checked:bg-gray-400",
  "disabled:checked:hover:bg-gray-400",
  "dark:ring-offset-yellow-200",
  "dark:bg-slate-800",
  "dark:ring-slate-900",
  "dark:hover:bg-yellow-200/[.5]",
  "dark:checked:hover:bg-yellow-200",
  "dark:checked:bg-yellow-200",
  "dark:disabled:ring-slate-900",
  "dark:disabled:checked:bg-gray-400",
  "dark:disabled:ring-offset-gray-400",
  "dark:disabled:hover:bg-slate-800",
  "dark:disabled:hover:checked:bg-gray-400",
];

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const handleClick = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped></style>
