<template>
  <div class="flex flex-col">
    <v-stepper-progress :currentStep="currentStep" class="mb-12" />
    <component :is="component[currentComponent]"></component>
    <v-btn
      class="my-12 w-1/3 text-gray-900 font-bold self-center"
      @click="nextStep"
      >{{ btnNames[currentStep - 1] }}</v-btn
    >
    <!-- <v-btn
      class="my-12 w-1/3 text-gray-900 font-bold self-center"
      @click="nextStep"
      >{{ btnNames[currentStep - 1] }}</v-btn
    > -->
  </div>
</template>

<script setup>
import GenerateMnemonic from "@/components/Layers/MnemonicSteps/GenerateMnemonic.vue";
import ConfirmMnemonic from "@/components/Layers/MnemonicSteps/ConfirmMnemonic.vue";
import { computed } from "vue";
import { ref } from "vue";
import VStepperProgress from "@UI/StepperProgress.vue";
import VBtn from "@UI/Button.vue";

const mnemonicSteps = ref(["GenerateMnemonic", "ConfirmMnemonic"]);
const btnNames = ref(["I Wrote these words", "Next"]);
const component = { GenerateMnemonic, ConfirmMnemonic };

const currentStep = ref(1);

const currentComponent = computed(() => {
  return ref(mnemonicSteps.value[currentStep.value - 1]).value;
});

function nextStep() {
  currentStep.value++;
}
</script>
