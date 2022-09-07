<template>
  <div>
    <!-- 1st section -->
    <div
      class="flex text-center my-16 max-w-screen-lg px-6 m-auto space-x-18 justify-between md:h-98 md:items-center md:text-left md:greets-content"
    >
      <div class="md:basis-5/12 space-y-10">
        <div>
          <h1 class="text-5xl">Welcome to</h1>
          <h1 class="moon-gradient font-bold text-5xl">Moon Wallet</h1>
        </div>
        <div>
          <p class="font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas,
            tempora sequi voluptas fugit laborum ab eos nulla tempore tenetur
            iusto accusantium nihil laboriosam expedita velit eveniet ipsum
            animi eligendi.
          </p>
        </div>
        <div
          class="flex flex-wrap flex-col space-y-8 justify-between md:space-x-6 md:space-y-0 md:flex-row"
        >
          <v-btn class="flex-1 py-5" @click="$router.push('/wallet/create')"
            >Create Wallet</v-btn
          >
          <v-btn
            class="flex-1 py-5"
            outline
            @click="$router.push('/wallet/access')"
            >Access Wallet</v-btn
          >
        </div>
      </div>
      <div class="hidden md:block basis-5/12">
        <img
          class="rounded-sm"
          src="https://random.imagecdn.app/640/580"
          alt="img"
        />
      </div>
    </div>

    <!-- 2nd section -->
    <div class="bg-emerald-300 dark:bg-gray-100">
      <div
        class="px-6 text-center md:text-right text-indigo-900 content flex items-center justify-between m-auto max-w-screen-lg"
      >
        <div class="md:basis-5/12 hidden md:block">
          <img
            class="rounded-sm"
            src="https://random.imagecdn.app/640/390"
            alt="img"
          />
        </div>
        <div class="md:basis-5/12 space-y-2">
          <div class="mb-4">
            <h2 class="font-semibold text-2xl">Header 2</h2>
          </div>
          <div>
            <p class="font-medium mt-10 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quas, tempora sequi voluptas fugit laborum ab eos nulla tempore
              tenetur iusto accusantium nihil laboriosam expedita velit eveniet
              ipsum animi eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd section -->
    <div
      class="px-6 text-center md:text-right flex content max-w-screen-lg m-auto items-center justify-between"
    >
      <div class="md:basis-5/12 hidden md:block">
        <img
          class="rounded-sm"
          src="https://random.imagecdn.app/640/390"
          alt="img"
        />
      </div>
      <div class="md:basis-5/12 space-y-2">
        <div class="mb-4">
          <h2 class="font-semibold text-2xl">Header 2</h2>
        </div>
        <div>
          <p class="font-medium mt-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas,
            tempora sequi voluptas fugit laborum ab eos nulla tempore tenetur
            iusto accusantium nihil laboriosam expedita velit eveniet ipsum
            animi eligendi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VBtn from "@UI/Button.vue";
</script>

<style scoped>
.greets-content {
  height: 800px;
}

.content {
  height: 600px;
}

.moon-gradient {
  background: -webkit-linear-gradient(45deg, #ffdd91, #787492 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
