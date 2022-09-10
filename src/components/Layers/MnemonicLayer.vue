<template>
  <div class="flex flex-col">
    <v-stepper-progress
      :currentStep="currentStep"
      :hints="hints"
      class="mb-12"
    />
    <KeepAlive>
      <component :is="component[currentComponent]"></component>
    </KeepAlive>
    <div class="flex justify-center space-x-6">
      <v-btn
        v-if="currentStep > 1"
        class="mt-12 w-full text-gray-900 font-bold self-center"
        @click="backStep"
        large
        >Back</v-btn
      >
      <v-btn
        class="mt-12 w-full text-gray-900 font-bold self-center"
        @click="nextStep"
        large
        >{{ btnNames[currentStep - 1] }}</v-btn
      >
    </div>
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
const btnNames = ref(["I Wrote these words", "Next", "Done"]);
const component = { GenerateMnemonic, ConfirmMnemonic };

const hints = ref(["Write", "Verify", "Done"]);

const currentStep = ref(1);

const currentComponent = computed(() => {
  return ref(mnemonicSteps.value[currentStep.value - 1]).value;
});

function nextStep() {
  currentStep.value++;
}
function backStep() {
  currentStep.value--;
}
</script>
