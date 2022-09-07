<template>
  <label for="qwe">{{ label }}</label>
  <input
    type="text"
    id="qwe"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :label="label"
    class="text-indigo-200 bg-transparent border border-indigo-200 font-medium px-2 py-1 rounded-sm text-lg focus:outline-none"
  />
</template>

<script setup>
const props = defineProps(["modelValue", "label"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
