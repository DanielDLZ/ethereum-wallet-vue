<template>
  <div class="flex flex-col">
    <v-stepper-progress
      :currentStep="currentStep"
      :hints="['Write', 'Verify', 'Done']"
      class="mb-12"
    />
    <KeepAlive>
      <component
        :is="components[currentComponent]"
        @next-step="nextStep"
        @back-step="backStep"
        @new-mnemonic-list="saveMnemonicList"
      ></component>
    </KeepAlive>
  </div>
</template>

<script setup>
import GenerateMnemonic from "@/components/Layers/MnemonicSteps/GenerateMnemonic.vue";
import ConfirmMnemonic from "@/components/Layers/MnemonicSteps/ConfirmMnemonic.vue";
import DoneMnemonic from "@/components/Layers/MnemonicSteps/DoneMnemonic.vue";
import VStepperProgress from "@UI/StepperProgress.vue";
import { computed, ref, provide } from "vue";

const mnemonicSteps = ref([
  "GenerateMnemonic",
  "ConfirmMnemonic",
  "DoneMnemonic",
]);
const components = { GenerateMnemonic, ConfirmMnemonic, DoneMnemonic };
const currentStep = ref(1);
const currentComponent = computed(() => {
  return ref(mnemonicSteps.value[currentStep.value - 1]).value;
});

const mnemonicList = ref([]);

function nextStep() {
  currentStep.value++;
}

function backStep() {
  currentStep.value--;
}

function saveMnemonicList(data) {
  mnemonicList.value = data;
}

provide("mnemonicList", mnemonicList);
</script>
