<template>
  <q-form v-model="Movement">
    <div>
      <CodeInput :key="ChildComponentKey" :p_code='Movement.p_code' :field_to_read=0></CodeInput>
      <q-separator class="q-mt-xs" color="grey"></q-separator>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-lg q-ml-sm" name="edit"></q-icon>
        <q-input
          v-if="Quasar.platform.is.desktop"
          v-model="Movement.p_name"
          style="width: 90%"
          :hint="$t('product')"
        ></q-input>
        <q-input
          v-if="Quasar.platform.is.mobile"
          v-model="Movement.p_name"
          type="text"
          style="width: 85%"
          :hint="$t('product')"
        ></q-input>
      </div>
      <div>
        <QuantityInput :key="ChildComponentKey" :p_qty='Movement.p_qty' :Step=0.5></QuantityInput>
      </div>
      <CodeInput :key="ChildComponentKey" :p_code='Movement.p_local_code' :field_to_read=1 ></CodeInput>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="warehouse"></q-icon>
        <q-input
          v-if="Quasar.platform.is.desktop"
          style="width: 90%"
          dense
          clearable
          v-model="Movement.p_local"
          type="text"
          :hint="$t('location')">
        </q-input>
        <q-input
            v-if="Quasar.platform.is.mobile"
            style="width: 85%"
            dense
            clearable
            v-model="Movement.p_local"
            type="text"
            :hint="$t('location')">
        </q-input>
      </div>
      <div class="row q-mt-sm">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="calendar_month"></q-icon>
        <q-input
          v-if="Quasar.platform.is.mobile"
          style="width: 85%"
          dense
          clearable
          v-model="Movement.p_date"
          type="date"
          :label="Movement.p_date"
          :hint="$t('date')">
        </q-input>
        <q-input
          v-if="Quasar.platform.is.desktop"
          style="width: 90%"
          dense
          clearable
          v-model="Movement.p_date"
          type="date"
          :label="Movement.p_date"
          :hint="$t('date')">
        </q-input>

      </div>
      <div v-if="Quasar.platform.is.mobile && upd_info == true" class="row q-mt-lg">
        <q-icon color="grey" class="q-mr-sm  q-ml-sm" name="badge"></q-icon>
        <label class="text-grey"> Colaborador: <strong>{{Movement.p_staff}}</strong></label>
      </div>
      <q-card-actions align="right" class="text-teal">
        <q-btn
          flat
          :label="$t('cancel')"
          @click="clearAll(), forceRerender()"/>
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
import { defineComponent, ref, onMounted} from 'vue';
import { useQuasar } from 'quasar';
import { data_store_dev } from "src/stores/data_store";
import {scan_store} from 'src/stores/scan_store';
import StandardButton from 'src/components/StandardButton.vue';
import QuantityInput from 'src/components/QuantityInput.vue';
import CodeInput from "src/components/CodeInput.vue";

const scan_st = scan_store();
const Movement = ref([]);

export default defineComponent({
  name: "MovementForm",
  props:{
    row_id: Number,
    mov_type: String,
    upd_info: Boolean
  },
  components:{
    StandardButton,
    QuantityInput,
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

    // Get Movement by ID from Movement page (only in update operation)
    const GetMovement = () =>{
      if(props.upd_info == true){
        for (let index = 0; index < DataStoreAux.$state.movements.length; index++) {
          if(DataStoreAux.$state.movements[index].m_id == props.row_id) Movement.value = DataStoreAux.$state.movements[index];
        }
      }
    };

    // Clear all data from form, from auxiliary store, and set the read field to product code ->(for zebra hardware scanner)
    const clearAll = () =>{
      // Set field to read to product code input ( for zebra scanner that scan and change field automaticaly)
      scan_st.read_field = 0;
      // Clear movement object
      Movement.value = [];
    }

    // Force render again the child components to get data for each one,
    // because the child component is mounted and renderized when parent component (Movement form) is mounted.
    const forceRerender = () => {
      ChildComponentKey.value += 1;
    };

    onMounted(() =>{

      Movement.value = [];

      //Clean any previous readed code.
      scan_st.code = '';

      // Set product code to be first field to auto fill whe code is scanned by zebra hardware
      scan_st.read_field = 0;

      // If is a update operation, get data by received id from component property.
      if(props.upd_info == true) GetMovement();

      // After get the Movement data, re render the child components to pass data to then.
      forceRerender();

      // Set movement type by information that came from Movement page pressing diferent buttons for direfet type of movements
      Movement.value.p_type = props.mov_type;

      // Enable Hardware Zebra Scanner
      if(Quasar.platform.is.mobile){
        //Allow the use of scanner
        scan_st.isAllowed = "allow";
      }
    });

    return{
      Movement,
      ChildComponentKey,
      Quasar,
      scan_st,
      forceRerender,
      GetMovement,
      clearAll
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', Movement.value);
    },
    AutoFill(value){
      const dateNow = new Date();
      const year = dateNow.getFullYear();
      let month = dateNow.getMonth() + 1;
      let day = dateNow.getDate();
      var counter = 1;

      // Format to 09 or 08 in case of day or month are below number 10
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      var FormatedDate = year + '-' + month + '-' + day;

      // Condition to set scanned code to product code field
      if(scan_st.read_field == 0){

        this.Movement.p_code = value;

        // Set location field to be filled with scanned code in next round with Zebra scanner hardware
        scan_st.read_field = 1

        //For tests purpose
        if(this.upd_info != true){
          this.Movement.p_name = "Artigo Exemplo"
          this.Movement.p_date = FormatedDate;
          this.Movement.p_qty = counter;
          this.ChildComponentKey += 1;
        }
      }else if(scan_st.read_field == 1){
        this.Movement.p_local_code = value;
        //For tests purpose
        if(this.upd_info != true){
          this.Movement.p_local = "Armazém 4, Corredor 2, Prateleira 3";
        }
        this.scan_st.isAllowed = 'deny';
      }
    }
  },
  watch:{
    ScannedCode(value){
      if(value != ''){
        this.AutoFill(value);
        scan_st.code = '';
      }
    }
  }
})
</script>
