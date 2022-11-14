<template>
  <q-btn class="q-mt-xs" rounded icon="search" color="primary" dense v-bind:dark="dark" />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "SearchButton",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
