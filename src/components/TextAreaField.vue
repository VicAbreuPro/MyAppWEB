<template>
  <q-input
    dense
    square
    outlined
    clearable
    stack-label
    type="textarea"
    v-bind:dark="dark"
  />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "TextAreaField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
