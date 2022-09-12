<template>
  <div class="flex flex-col">
    <v-stepper-progress
      :currentStep="currentStep"
      :hints="hints"
      class="mb-12"
    />
    <KeepAlive>
      <component
        :is="component[currentComponent]"
        @next-step="nextStep"
        @back-step="backStep"
      ></component>
    </KeepAlive>
  </div>
</template>

<script setup>
import GenerateMnemonic from "@/components/Layers/MnemonicSteps/GenerateMnemonic.vue";
import ConfirmMnemonic from "@/components/Layers/MnemonicSteps/ConfirmMnemonic.vue";
import { computed } from "vue";
import { ref } from "vue";
import VStepperProgress from "@UI/StepperProgress.vue";

const mnemonicSteps = ref(["GenerateMnemonic", "ConfirmMnemonic"]);
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
