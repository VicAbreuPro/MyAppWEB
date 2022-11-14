<template>
  <q-input v-bind:dark="dark" square outlined dense clearable stack-label />
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "TextField",
  setup() {
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);

    return {
      dark,
    };
  },
};
</script>
