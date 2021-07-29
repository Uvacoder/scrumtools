<template>
  <div class="row">
    <form class="col s12">
      <h2>Host</h2>
      <div class="input-field row">
        <input id="hostName" v-model="hostName" type="text" />
        <label for="hostName">Host Name</label>
      </div>
      <div class="btn row" :class="hostName.length == 0 && 'disabled'">
        Host Poker Session
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from "vue";

interface Data {
  hostName: Ref<string>;
}

export default {
  data(): Data {
    const hostName = ref("");
    return {
      hostName,
    };
  },
};
</script>
