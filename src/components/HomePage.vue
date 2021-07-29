<template>
  <div id="main" class="container">
    <div class="row">
      <host-box class="col s6"></host-box>
      <connect-box class="col s6"></connect-box>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store/store";
import HostBox from "./HostBox.vue";
import ConnectBox from "./ConnectBox.vue";

interface Data {
  startPoker: () => void;
}

export default {
  components: { HostBox, ConnectBox },
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

<style lang="scss">
#main {
  margin-top: 2em;
}
</style>
