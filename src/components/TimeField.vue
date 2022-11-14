<template>
  <q-input dense square outlined type="time" stack-label v-bind:dark="dark" />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "TimeField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
