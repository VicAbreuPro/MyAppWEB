<template>
  <q-toggle v-bind:dark="dark" left-label dense keep-color />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "ToggleField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
