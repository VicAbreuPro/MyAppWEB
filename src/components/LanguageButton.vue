<template>
  <q-btn class="q-ml-sm q-mr-sm q-mt-xs q-mb-xs" rounded icon="language" color="primary" :label="aux.$state.language_label" dense v-bind:dark="dark" />
</template>

<script>
import { useQuasar } from "quasar";
import { computed, ref } from "vue";
import {aux_store} from "src/stores/aux_store";

export default {
  name: "LanguageButton",
  setup() {
    const aux = aux_store();
    const $q = useQuasar();
    const dark = computed(() => $q.dark.isActive);
    const language_label = ref('');

    return {
      aux,
      language_label,
      dark,
    };
  },
};
</script>
