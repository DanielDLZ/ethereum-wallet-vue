<template>
  <button
    @click="switchButton"
    class="wh duration-200 rounded-full border border-yellow-400 bg-gray-100 hover:border-indigo-400 dark:bg-indigo-900 dark:border-indigo-900"
  >
    <div
      class="wh-switch bg-yellow-400 rounded-full absolute dark:bg-indigo-200"
      :class="checked ? 'off' : 'on'"
    ></div>
  </button>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.wh {
  width: 38px;
  height: 21px;
}
.wh-switch {
  width: 15px;
  height: 15px;
  top: 2px;
  transition: left, 0.2s;
}
.on {
  left: 52%;
}
.off {
  left: 2px;
}
</style>
