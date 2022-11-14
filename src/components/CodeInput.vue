<template>
  <div class="row">
    <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="confirmation_number"></q-icon>
    <q-input
      v-if="detect.platform.is.desktop"
      style="width: 90%"
      class="form q-ml-sm"
      dense
      v-model="p_code"
      clearable
      :hint="$t('code')"
      type="text">
    </q-input>
    <q-input
      v-if="detect.platform.is.mobile"
      style="width: 60%"
      class="form q-ml-sm"
      v-model="p_code"
      dense
      clearable
      :hint="$t('code')"
      type="text">
    </q-input>
    <StandardButton
      v-if="detect.platform.is.mobile"
      class="q-mt-sm q-ml-md "
      style="font-size: 10px; height: 30px; width: 20%"
      label="SCAN"
      icon="document_scanner"
      @click="OpenCamera">
    </StandardButton>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import {scan_store} from 'src/stores/scan_store';
import StandardButton from "src/components/StandardButton.vue";

export default {
  name: "CodeInput",
  props:{
    p_code: String,
    field_to_read: Number
  },
  components:{
    StandardButton
  },
  setup(props) {
    const detect = useQuasar();
    const scan_st = scan_store();
    const aux_p_code = ref();

    const OpenCamera = () =>{
      // Open Camera to scann and set value to field 'Product Code'
      if(props.field_to_read == 0){
        scan_st.read_field = 0;
      }
      // Open Camera to scann and set value to field 'Location Code'
      else if(props.field_to_read == 1) {
        scan_st.read_field = 1;
      }
      ScannerView.OpenScanner();
    }

    onMounted(() =>{
      aux_p_code.value = props.p_code
    });

    return {
      detect,
      aux_p_code,
      OpenCamera
    };
  },
  methods:{
   emitEvent(){
      this.$emit('emit_p_code', aux_p_code.value)
    }
  },
};
</script>
