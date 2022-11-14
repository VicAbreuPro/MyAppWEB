<template>
  <q-select
    dense
    square
    outlined
    clearable
    emit-value
    stack-label
    map-options
    option-value="id"
    v-bind:dark="dark"
    option-disable="disabled"
    option-label="description"
  />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "SelectField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
