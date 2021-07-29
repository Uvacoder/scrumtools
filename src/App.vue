<template>
  <nav-bar title="Scrum Tools"></nav-bar>
  <div class="container">
    <div class="waves-effect waves-light btn">Hello</div>
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
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
