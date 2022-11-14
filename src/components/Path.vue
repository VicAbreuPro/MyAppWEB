<template>
  <div class="row q-mt-xs q-mr-md">
    <slot name="home"></slot>
    <slot name="path" style="text-decoration:underline"></slot>
  </div>
</template>
<script>

export default {
  name: "PathString",
  setup() {
    return {};
  },
};
</script>
