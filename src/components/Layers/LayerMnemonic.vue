<template>
  <div class="flex flex-col">
    <v-stepper-progress :currentStep="currentStep" class="mb-12" />
    <component :is="component[currentComponent]"></component>
    <v-btn class="bg-yellow-200 my-12 w-1/3 text-gray-900 font-bold self-center"
      >I Wrote this</v-btn
    >
  </div>
</template>

<script setup>
import GenerateMnemonic from "@/components/Layers/MnemonicSteps/GenerateMnemonic.vue";
import { computed } from "vue";
import { ref } from "vue";
import VStepperProgress from "@UI/StepperProgress.vue";
import VBtn from "@UI/Button.vue";

const mnemonicSteps = ref(["GenerateMnemonic"]);
const currentStep = ref(1);

const component = { GenerateMnemonic };

const currentComponent = computed(() => {
  return ref(mnemonicSteps.value[currentStep.value - 1]).value;
});
</script>
