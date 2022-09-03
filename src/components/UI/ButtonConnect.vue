<template>
  <button class="connect font-semibold w-full h-32 rounded-xl">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VBtnConnect",
};
</script>

<style scoped>
.connect {
  border: solid 1px #ccc8f0;
  transition: 0.2s;
  color: #ccc8f0;
}
.connect:hover {
  color: #000000;
  background-color: #fee690;
  border: none;
  transform: scale(1.1);
}
</style>
