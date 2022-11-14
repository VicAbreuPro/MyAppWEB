<template>
  <q-input dense square outlined type="date" stack-label v-bind:dark="dark" />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "DateField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
