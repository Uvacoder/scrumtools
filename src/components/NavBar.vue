<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">{{ title }}</a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props): void {
    console.log(props.title);
  },
};
</script>
