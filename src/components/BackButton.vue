<template>
  <q-btn rounded icon="arrow_back" color="primary" dense v-bind:dark="dark" />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "BackButton",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
