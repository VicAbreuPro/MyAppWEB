<template>
  <q-form v-model="Location" @change="emitEvent" style="width: 100%; max-width: 1500px">
    <div class="">
      <CodeInput :key="ChildComponentKey" :p_code='Location.l_code' :field_to_read=0></CodeInput>
      <q-separator color="grey" class=" q-mt-sm q-mb-sm"></q-separator>
      <div class="row">
        <q-icon color="grey" class="q-mr-sm q-mt-md q-ml-sm" name="warehouse"></q-icon>
        <q-input
          style="width: 94%"
          dense
          clearable
          v-model="Location.l_local_1"
          type="text"
          hint="Localização">
        </q-input>
      </div>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="location_searching"></q-icon>
        <q-input
          style="width: 94%"
          dense
          clearable
          v-model="Location.l_description"
          type="text"
          hint="Descrição">
        </q-input>
      </div>
      <q-card-actions align="right" class="text-teal">
        <q-btn
          flat
          :label="$t('cancel')"
          @click="Location = []"/>
        <q-btn
          flat
          class="q-mr-md"
          :label="$t('confirm')"
          v-close-popup/>
      </q-card-actions>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from 'quasar';
import { data_store_dev } from "src/stores/data_store";
import {scan_store} from 'src/stores/scan_store';
import StandardButton from "src/components/StandardButton.vue";
import CodeInput from "src/components/CodeInput.vue";

const scan_st = scan_store();
const Location = ref([])

export default defineComponent({
  name: "LocationForm",
  props:{
    row_id: Number,
    upd_info: Boolean
  },
  components:{
    StandardButton,
    CodeInput
  },
  computed:{
    ScannedCode: function(){
      return scan_st.code;
    }
  },
  setup(props){
    const Quasar = useQuasar();
    const DataStoreAux = data_store_dev();
    const ChildComponentKey = ref(0);

    // Get Location Info by ID from Locations page (only in update operation)
    const GetLocation = () =>{
      if(props.upd_info == true){
        for (let index = 0; index < DataStoreAux.$state.locations.length; index++) {
          if(DataStoreAux.$state.locations[index].l_id == props.row_id) Location.value = DataStoreAux.$state.locations[index];
        }
      }
    };

    // Force render again the child components to get data for each one,
    // because the child component is mounted and renderized when parent component (Movement form) is mounted.
    const forceRerender = () => {
      ChildComponentKey.value += 1;
    };

    onMounted(() =>{

      Location.value = [];

      //Clean any previous readed code
      scan_st.code = '';

      // Set product code to be first field to auto fill whe code is scanned by zebra hardware
      scan_st.read_field = 0;

      // If is a update operation, get data by received id from component property.
      if(props.upd_info == true) GetLocation();

      // After get the Movement data, re render the child components to pass data to then.
      forceRerender();

      if(Quasar.platform.is.mobile){
        //Allow the use of scanner
        scan_st.isAllowed = "allow";
      }
    });

    return{
      Location,
      ChildComponentKey,
      Quasar,
      scan_st,
      forceRerender,
      GetLocation
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', Location.value)
    }
  },
  watch:{
    ScannedCode(value){
      if(value != ''){
        this.Location.l_code = value;
        scan_st.code = '';
      }
    }
  }
})
</script>
