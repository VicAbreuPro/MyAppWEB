<template>
  <q-btn class="q-ml-xs q-mr-xs q-mt-xs q-mb-xs" rounded icon="add" color="primary" dense v-bind:dark="dark"  />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "AddButton",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
