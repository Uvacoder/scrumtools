<template>
  <div class="row">
    <form class="col s12">
      <h2>Host Session</h2>
      <div class="input-field row">
        <input id="hostName" v-model="hostName" type="text" />
        <label for="hostName">Host Name</label>
      </div>
      <div class="btn row" :class="!canHost && 'disabled'">
        Host Poker Session
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, ref, Ref } from "vue";

interface Data {
  hostName: Ref<string>;
  canHost: ComputedRef<boolean>;
}

export default {
  data(): Data {
    const hostName = ref("");
    return {
      hostName,
      canHost: computed(() => {
        return hostName.value.length > 0;
      }),
    };
  },
};
</script>
