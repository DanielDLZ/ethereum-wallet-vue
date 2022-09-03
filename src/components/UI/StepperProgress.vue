<template>
  <div class="flex justify-between items-center">
    <template v-for="i in stepsCount" :key="i">
      <div
        class="circle border border-yellow-200 rounded-full text-center pt-2"
        :class="i > stepPassed ? (i === currentStep ? 'active' : '') : 'passed'"
      >
        <span v-if="i > stepPassed" class="font-bold">{{ i }}</span>
        <font-awesome-icon icon="fa-solid fa-check" v-else />
      </div>
      <div class="grow mx-4 last:hidden bg-yellow-200 h-px"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "VStepperProgress",
  props: {
    stepsCount: {
      requred: true,
      type: Number,
      validator(value) {
        return value > 1;
      },
      default: 3,
    },
    currentStep: {
      requred: true,
      type: Number,
    },
  },
  data() {
    return {
      stepPassed: 0,
    };
  },
  methods: {
    incr() {
      this.currentStep++;
      this.stepPassed++;
    },
  },
};
</script>

<style scoped>
.circle {
  height: 40px;
  width: 40px;
}
.passed {
  background-color: #fef08a;
  color: black;
}
.active {
  background-color: #fef08a;
  color: black;
}
</style>
