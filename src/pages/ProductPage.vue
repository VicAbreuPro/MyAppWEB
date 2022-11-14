<template>
  <q-page>
    <div class="row q-mt-md">
      <div class="col text-left">
        <AddButton
          class="q-ml-md q-mt-xs"
          @click="open_dialog_p = true; is_update = false"
        ></AddButton>
      </div>
      <div class="text-right">
        <q-icon class="q-mr-sm" name="dashboard_customize" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('product_manager')}}</label>
      </div>
    </div>
    <div class="row q-mt-sm">
      <q-table
        v-if="Quasar.platform.is.desktop"
        class="q-mt-sm q-ml-md q-mr-md"
        :rows="DataStoreAux.$state.products"
        :columns="product_columns"
        dense
        :rows-per-page-options="[10, 20, 30, 40]"
        style="height: 40%; width: 100%"
        >

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props">
              <SearchInput class="q-mb-xs">
              </SearchInput>
              {{col.label}}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @click="open_dialog_p = true; id_aux = props.row.p_id  ; is_update = true">
            <q-td key="p_name">
              {{props.row.p_name}}
            </q-td>
            <q-td key="p_code">
              {{props.row.p_code}}
            </q-td>
            <q-td key="p_value">
              {{props.row.p_value}}
            </q-td>
            <q-td key="p_date">
              {{props.row.p_date}}
            </q-td>
            <q-td key="p_local">
              {{props.row.p_local}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-table
        v-if="Quasar.platform.is.mobile"
        class="q-mt-sm fixed-header"
        :rows="DataStoreAux.$state.products"
        :columns="product_columns"
        dense
        :rows-per-page-options="[10, 20, 30, 40]"
        style="height: 40%; width: 100%">

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props">
              <SearchInput class="q-mb-xs">
              </SearchInput>
              {{col.label}}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @click="open_dialog_p = true; id_aux = props.row.p_id ; is_update = true">
            <q-td key="p_name">
              {{props.row.p_name}}
            </q-td>
            <q-td key="p_code">
              {{props.row.p_code}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <CustomDialog v-model="open_dialog_p">
      <template v-slot:title>
        <label>{{$t('product')}}</label>
      </template>
      <template v-slot:form>
        <NewProduct :row_id='id_aux' :upd_info="is_update"></NewProduct>
      </template>
    </CustomDialog>
  </q-page>
</template>

<script>
import SearchInput from "src/components/SearchField.vue";
import StandardButton from "src/components/StandardButton.vue";
import AddButton from "src/components/AddButton.vue";
import NewProduct from "src/components/ProductForm.vue";
import CustomDialog from "src/components/CustomDialog.vue";
import { data_store_dev } from "src/stores/data_store";
import {useQuasar} from 'quasar';
import { ref } from "vue";

export default {
  name: 'ProductPage',
  components:{
    StandardButton,
    SearchInput,
    NewProduct,
    CustomDialog,
    AddButton,
    AddButton
  },
  computed:{
    product_columns (){
      if(this.Quasar.platform.is.desktop){
        let columns = [
          {
            name: "p_name",
            label: this.$t('product'),
            align: "left",
            field: "p_name",
            required: true,
          },
          {
            name: "p_code",
            label: this.$t('code'),
            align: "left",
            field: "p_code",
            required: true,
          },
          {
            name: "p_value",
            label: this.$t('value'),
            align: "left",
            field: "p_value",
            required: true,
          },
          {
            name: "p_date",
            label: this.$t('date'),
            align: "left",
            field: "p_date",
            required: true,
          },
          {
            name: "p_local",
            label: this.$t('location'),
            align: "left",
            required: true,
          }
        ]
        return columns
      }else if(this.Quasar.platform.is.mobile){
        let columns = [
          {
            name: "p_name",
            label: this.$t('product'),
            align: "left",
            field: "p_name",
            required: true,
          },
          {
            name: "p_code",
            label: this.$t('code'),
            align: "left",
            field: "p_code",
            required: true,
          }
        ]
        return columns
      }
    }
  },
  setup() {
    const DataStoreAux = data_store_dev();
    const Quasar = useQuasar();
    const id_aux = ref();

    return{
      DataStoreAux,
      id_aux,
      Quasar,
      open_dialog_p: ref(false),
      is_update: ref(false)
    }
  },
}
</script>
