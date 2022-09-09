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
  group: {
    type: Boolean,
    default: false,
  },
});

const handleClick = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div>
    <input
      type="radio"
      :checked="checked"
      :value="value"
      :name="name"
      :id="id"
      @input="handleClick($event)"
      class="custom-radio"
    />
    <label :for="id">{{ label }} </label>
  </div>
</template>

<style scoped>
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  transition: 0.2s;
  cursor: pointer;
}
.custom-radio + label::before {
  content: "";
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #c4b5fd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 80% 80%;
}
.custom-radio:not(:disabled):not(:checked) + label:hover::before {
  border-color: #c4b5fd;
}
.custom-radio:not(:disabled):active + label::before {
  background-color: #c4b5fd;
  border-color: #c4b5fd;
}
.custom-radio:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
.custom-radio:checked + label::before {
  border-color: #f3ec8f;
  background-color: #ffffff00;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23f3ec8f'/%3e%3c/svg%3e");
}
.custom-radio:disabled + label::before {
  background-color: #e9ecef;
}
</style>
