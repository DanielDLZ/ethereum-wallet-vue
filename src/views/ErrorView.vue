<template>
  <teleport to="body">
    <div
      id="console"
      class="inset-0 absolute flex flex-col overflow-y-auto px-4 py-8 z-[20] layout text-xs md:text-sm md:px-20 md:py-16"
      v-focus
    >
      <input id="input" @keyup.enter="sendCommand" type="text" v-model="text" />
      <Logo />
      <p class="prompt">type help for help</p>
      <p class="prompt" v-for="(command, index) in commands" :key="command">
        {{ command }}
      </p>
      <p class="fake-input">{{ text }}</p>
    </div>
  </teleport>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const text = ref("");
const commands = ref([]);
const router = useRouter();

const emit = defineEmits(["createWallet", "closeCreateWallet"]);

function changeColor(color) {
  document.documentElement.style.setProperty("--terminal-text", color);
  document.documentElement.style.setProperty(
    "--terminal-caret-shadow",
    color + "a6"
  );
  localStorage.setItem("console-theme", color);
  //blue    1b37d3
  //red     d31b1b
  //yellow  d3cd1b
  //green   1bd339
  //moon    b5d2f7
}

function shuffle(array) {
  let arr = array.split("");
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr.join("");
}

function sendCommand() {
  commands.value.push(text.value);
  switch (text.value.toLowerCase()) {
    case "cake":
      commands.value.push("WIP");
      break;
    case "clear":
      commands.value = [];
      break;
    case "exit":
      router.push("/");
      break;
    case "game":
      commands.value.push("WIP");
      break;
    case "hacker":
      commands.value.push("WIP");
      break;
    case "blue":
      changeColor("#1b37d3");
      break;
    case "red":
      changeColor("#d31b1b");
      break;
    case "green":
      changeColor("#1bd339");
      break;
    case "yellow":
      changeColor("#d3cd1b");
      break;
    case "moon":
      changeColor("#b5d2f7");
      break;
    case "random":
      for (let i = 0; i < 35; i++) {
        commands.value.push(shuffle("nopqrstuvwxyzABCDEFGHIJKLM1234567890"));
      }
      break;
    case "help": // if (x === 'value2')
      commands.value.push(`You can type next commands:

  cake                 cake is a lie or maybe its true who knows
  clear                clear screen
  exit                 go to home page of this site
  game                 open awesome game
  hacker               some hackers sim
  random               generate random 35 string
  blue                 blue theme
  red                  red theme
  green                green theme (default)
  yellow               yellow theme
  moon                 moon theme
  help                 show all commands
          `);
      break;
    default:
      commands.value.push(`command not recognize type help for command list`);
      break;
  }
  text.value = "";
}

onMounted(() => {
  changeColor(localStorage.getItem("console-theme"));
});
</script>

<style scoped>
@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.layout {
  background-color: black;
}

input {
  outline: none;
  background-color: #000000;
  caret-color: black;
  position: absolute;
  color: #000000;
  top: -100px;
}

#console::-webkit-scrollbar {
  width: 18px; /* width of the entire scrollbar */
}

#console::-webkit-scrollbar-track {
  background: rgb(0, 0, 0); /* color of the tracking area */
}

#console::-webkit-scrollbar-thumb {
  background-color: var(--terminal-text); /* color of the scroll thumb */
  border: 3px solid rgb(0, 0, 0); /* creates padding around scroll thumb */
}

#console {
  scrollbar-width: thin;
  scrollbar-color: var(--terminal-text) rgb(0, 0, 0);
}
.prompt {
  color: var(--terminal-text);
  display: block;
  font-family: "AndaleMono", monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  white-space: pre-wrap;
  text-shadow: 0 0 5px var(--terminal-text);
  line-height: 1;
  margin-bottom: 0.75em;
}

.fake-input::before,
.prompt::before {
  content: "> ";
  display: inline-block;
}

.fake-input {
  color: var(--terminal-text);
  display: block;
  font-family: "AndaleMono", monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  white-space: pre-wrap;
  text-shadow: 0 0 5px var(--terminal-text);
  line-height: 1;
  margin-bottom: 0.75em;
}

.fake-input::after {
  display: inline-block;
  vertical-align: -0.15em;
  width: 0.75em;
  height: 1em;
  margin-left: 5px;
  background: var(--terminal-text);
  box-shadow: 1px 1px 1px var(--terminal-caret-shadow),
    -1px -1px 1px var(--terminal-caret-shadow),
    1px -1px 1px var(--terminal-caret-shadow),
    -1px 1px 1px var(--terminal-caret-shadow);
  -webkit-animation: cursor-blink 1.25s steps(1) infinite;
  -moz-animation: cursor-blink 1.25s steps(1) infinite;
  animation: cursor-blink 1.25s steps(1) infinite;
  content: "";
}
</style>
