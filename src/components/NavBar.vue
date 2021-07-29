<template>
  <nav>
    <div class="nav-wrapper">
      <a id="title" href="#" class="brand-logo">{{ title }}</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, ComputedRef } from "vue";
import { useStore } from "../store/store";

interface Data {
  title: ComputedRef<string>;
}

export default {
  setup(): Data {
    const store = useStore();
    const title = computed(() => {
      return store.state.title;
    });
    return {
      title,
    };
  },
};
</script>

<style scoped>
#title {
  margin-left: 1em;
}
</style>
