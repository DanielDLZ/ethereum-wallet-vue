<script setup>
const emit = defineEmits(["update:modelValue"]);

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

<template>
  <div class="mx-4 my-2 flex items-center">
    <input
      class="w-3 h-3 cursor-pointer duration-200 disabled:cursor-not-allowed appearance-none rounded-full ring-2 ring-offset-4 ring-offset-gray-50 bg-gray-100 ring-emerald-400 hover:bg-emerald-200 disabled:hover:bg-gray-100 checked:hover:bg-emerald-400 checked:bg-emerald-400 disabled:ring-gray-400 disabled:checked:bg-gray-400 disabled:checked:hover:bg-gray-400 dark:ring-offset-slate-900 dark:bg-slate-800 dark:ring-yellow-200 dark:hover:bg-yellow-200/[.5] dark:checked:hover:bg-yellow-200 dark:checked:bg-yellow-200 dark:disabled:ring-gray-400 dark:disabled:checked:bg-gray-400 dark:disabled:hover:bg-slate-800 dark:disabled:hover:checked:bg-gray-400"
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

<style scoped></style>
