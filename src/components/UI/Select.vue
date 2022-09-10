<template>
  <div>
    <button
      class="border-2 font-semibold flex justify-between flex-row w-36 text-left rounded duration-200 px-4 py-2 border-emerald-400 hover:border-red-400 bg-gray-100 text-emerald-400 dark:border-blue-200 dark:hover:border-yellow-200 dark:bg-slate-900 dark:text-blue-200"
      @click="showOptions = !showOptions"
    >
      {{ selected.text }}
      <font-awesome-icon
        class="mt-0.5 duration-200"
        :class="{ 'arrow-rotate': showOptions }"
        icon="fa-solid fa-caret-down"
      />
    </button>
    <Transition>
      <ol
        class="border-2 border-emerald-400 bg-gray-100 rounded py-1 absolute top-0 dark:bg-slate-900 z-30 dark:border-yellow-200"
        v-if="showOptions"
      >
        <li
          class="w-36 px-4 font-semibold py-1 cursor-pointer text-emerald-400 hover:text-red-400 dark:text-blue-200 dark:hover:text-yellow-200"
          v-for="(option, index) in options"
          :key="'list' + option.value"
          @click="optionClicked(index)"
        >
          {{ option.text }}
        </li>
      </ol>
    </Transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    require: true,
  },
});

const emit = defineEmits(["optionUpdate"]);

const selected = ref(props.options[0]);

const showOptions = ref(false);

function optionClicked(index) {
  selected.value = props.options[index];
  emit("optionUpdate", selected.value);
}

function hideSelect() {
  showOptions.value = false;
}

onMounted(() => {
  document.addEventListener("click", hideSelect.bind(this), true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideSelect);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.arrow-rotate {
  transform: rotate(180deg);
}
</style>
