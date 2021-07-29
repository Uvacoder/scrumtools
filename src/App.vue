<template>
  <nav-bar></nav-bar>
  <home-page v-if="appState === 'Home'"></home-page>
  <poker-page v-if="appState === 'Poker'"></poker-page>
</template>

<script lang="ts">
import { ComputedRef, computed } from "vue";
import NavBar from "./components/NavBar.vue";
import { AppState, useStore } from "./store";
import HomePage from "./components/HomePage.vue";
import PokerPage from "./components/PokerPage.vue";

interface Data {
  appState: ComputedRef<AppState>;
}

export default {
  components: { NavBar, HomePage, PokerPage },
  setup(): Data {
    const store = useStore();
    return {
      appState: computed(() => {
        return store.state.state;
      }),
    };
  },
};
</script>

<style lang="scss">
@import "./theme.scss";
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  height: 100%;
  background-color: $background-color;
}
</style>
