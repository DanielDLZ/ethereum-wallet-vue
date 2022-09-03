<template>
  <slot></slot>
</template>

<script>
import CardBody from "./CardBody.vue";
import CardAction from "./CardAction.vue";

export default {
  components: {
    CardBody,
    CardAction,
  },
};
</script>

<style scoped></style>
