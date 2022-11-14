<template>
  <q-form v-model="Product">
    <div>
      <CodeInput :key="ChildComponentKey" :p_code='Product.p_code' :field_to_read=0></CodeInput>
      <q-separator color="grey" class="q-mt-xs q-mb-xs"></q-separator>
      <div class="row">
        <q-icon color="grey" class="q-mr-sm q-mt-md q-ml-sm" name="dashboard_customize"></q-icon>
        <q-input
          style="width: 90%"
          dense
          clearable
          v-model="Product.p_name"
          type="text"
          :hint="$t('product')">
        </q-input>
      </div>
      <div >
        <QuantityInput :key="ChildComponentKey" :p_qty=Product.p_qty :Step=0.5></QuantityInput>
      </div>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="paid"></q-icon>
        <q-input
          style="width: 90%"
          dense
          clearable
          v-model="Product.p_value"
          type="number"
          :hint="$t('value')">
        </q-input>
      </div>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="calendar_month"></q-icon>
        <q-input
          style="width: 90%"
          dense
          clearable
          v-model="Product.p_date"
          :label="Product.p_date"
          type="date"
          :hint="$t('date')">
        </q-input>
      </div>
      <q-separator color="grey" class="q-mt-xs q-mb-xs"></q-separator>
      <div class="text-right">
        <label class="text-grey q-mr-md"> <strong>{{$t('location')}}</strong></label>
        <CodeInput :key="ChildComponentKey" :p_code='Product.p_local_code' :field_to_read=1></CodeInput>
      </div>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="location_on"></q-icon>
        <q-input
          style="width: 90%"
          dense
          clearable
          v-model="Product.p_local"
          type="text"
          :hint="$t('location')">
        </q-input>
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
import { defineComponent, ref, onMounted } from "vue";
import StandardButton from "src/components/StandardButton.vue";
import CodeInput from "src/components/CodeInput.vue";
import QuantityInput from "src/components/QuantityInput.vue";
import { useQuasar } from 'quasar'
import {scan_store} from "src/stores/scan_store";
import { data_store_dev } from "src/stores/data_store";

const scan_st = scan_store();
const Product = ref([]);

export default defineComponent({
  name: "ProductForm",
  props:{
    row_id: Number,
    upd_info: Boolean,

  },
  components:{
    StandardButton,
    CodeInput,
    QuantityInput
  },
  computed:{
    scanned_product_code: function(){
      return scan_st.code;
    }
  },
  setup(props){
    const Quasar = useQuasar();
    const DataStoreAux = data_store_dev();
    const ChildComponentKey = ref(0);

    // Get Product by ID from Product page (only in update operation)
    const GetProduct = () =>{
      if(props.upd_info == true){
        for (let index = 0; index < DataStoreAux.$state.products.length; index++) {
          if(DataStoreAux.$state.products[index].p_id == props.row_id) Product.value = DataStoreAux.$state.products[index];
        }
      }
    };

    // Clear all data from form, from auxiliary store, and set the read field to product code ->(for zebra hardware scanner)
    const clearAll = () =>{
      scan_st.read_field = 0;
      Product.value = [];
    }

    // Force render again the child components to get data for each one,
    // because the child component is mounted and renderized when parent component (Movement form) is mounted.
    const forceRerender = () => {
      ChildComponentKey.value += 1;
    };

    onMounted(() =>{

      Product.value = [];

      //Clean any previous readed code
      scan_st.code = '';

      // Set product code to be first field to auto fill whe code is scanned by zebra hardware
      scan_st.read_field = 0;

      // If is a update operation, get data by received id from component property.
      if(props.upd_info == true) GetProduct();

      // After get the Movement data, re render the child components to pass data to then.
      forceRerender();

      if(Quasar.platform.is.mobile){
        //Allow the use of scanner
        scan_st.isAllowed = "allow";
      }
    });

    return{
      Product,
      ChildComponentKey,
      Quasar,
      scan_st,
      forceRerender,
      GetProduct,
      clearAll
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', Product.value)
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

      if(scan_st.read_field == 0){
        this.Product.p_code = value;

        // Set location field to be filled with scanned code in next round with Zebra scanner hardware
        scan_st.read_field = 1

        //For tests purpose
        if(this.upd_info != true){
          this.Product.p_name = "Artigo Exemplo"
          this.Product.p_date = FormatedDate;
          this.Product.p_qty = counter;
          this.ChildComponentKey += 1;
        }

      }else if(scan_st.read_field == 1){
        this.Product.p_local_code = value;
        //For tests purpose
        if(this.upd_info != true){
          this.Product.p_local = "Armazém 4, Corredor 2, Prateleira 3";
        }
        this.scan_st.isAllowed = 'deny';
      }
    }
  },
  watch:{
    scanned_product_code(value){
      if(value != ''){
        this.AutoFill(value);
        scan_st.code = '';
      }
    }
  }
})
</script>
