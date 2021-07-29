<template>
  <div class="row">
    <form class="col s12">
      <h2>Connect</h2>
      <div class="input-field row">
        <input id="userName" v-model="userName" type="text" />
        <label for="userName">User Name</label>
      </div>
      <div class="input-field row">
        <input id="sessionToken" v-model="sessionToken" type="text" />
        <label for="sessionToken">Session Token</label>
      </div>
      <div class="btn row" :class="!canConnect && 'disabled'">
        Connect To Session
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, ref, Ref } from "vue";

interface Data {
  userName: Ref<string>;
  sessionToken: Ref<string>;
  canConnect: Ref<boolean>;
}

export default {
  data(): Data {
    const userName = ref("");
    const sessionToken = ref("");
    return {
      userName,
      sessionToken,
      canConnect: computed(
        () => userName.value.length > 0 && sessionToken.value.length > 0
      ),
    };
  },
};
</script>
