<template>
  <div>Home Page</div>
  <div v-on:click="startPoker" class="waves-effect waves-light btn">
    Start Poker
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";

interface Data {
  startPoker: () => void;
}

export default {
  setup(): Data {
    const store = useStore();
    return {
      startPoker: () => {
        store.commit("hostPoker");
      },
    };
  },
};
</script>
