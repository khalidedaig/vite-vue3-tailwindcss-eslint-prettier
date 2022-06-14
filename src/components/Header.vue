<script setup>
import { MinusIcon, PlusIcon } from "@heroicons/vue/solid";
import { inject } from "vue";
import BaseButtun from "./BaseButtun.vue";
const global = inject("global");
/* eslint-disable no-undef */
defineProps({
  msg: {
    type: String,
    default: "",
  },
});

// const count = ref(0);
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center flex-col space-y-4">
        <h2
          class="
            text-base
            font-semibold
            text-indigo-600
            tracking-wide
            uppercase
          "
        >
          Vue 3 , vite, tailwindcss ,esLint and prettier :
          {{ ` ${global.state.count}` }}
        </h2>
        <div class="flex items-center justify-center space-x-4">
          <BaseButtun type="button" @click="global.increment"
            ><PlusIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Increment
          </BaseButtun>
          <BaseButtun type="button" @click="global.decrement"
            ><MinusIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Decrement
          </BaseButtun>
        </div>
      </div>
    </div>
  </div>
</template>
