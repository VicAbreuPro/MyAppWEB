<template>
  <q-page>
    <div class="col q-mt-md">
      <div class="text-right">
        <q-icon class="q-mr-md" name="inventory_2" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('inventory_manager')}}</label>
      </div>
    </div>
    <div v-if="path_location.$state.path_location != ''" class="row">
      <div class="col text-right"></div>
      <Path>
        <template v-slot:home>
          <q-icon class="pointer" @click="test('home')" name="home" size="18px"></q-icon>
        </template>
        <template v-slot:path>
          <label class="pointer" @click="test(path_element)" style="text-decoration:underline" v-for="path_element in path_location.$state.path_location" :key="path_element">/{{path_element}}</label>
        </template>
      </Path>
    </div>
    <div class="row q-mt-sm">
      <q-table
        class="q-mt-sm q-mr-xs q-ml-xs"
        :columns="inventory_columns"
        :rows="DataStoreAux.$state.inventory"
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
      </q-table>
    </div>
  </q-page>
</template>

<script>
import {path_store} from "src/stores/path_store";
import { data_store_dev } from "src/stores/data_store";
import useNotify from "src/composables/notify";
import SearchInput from "src/components/SearchField.vue";
import Path from "src/components/Path.vue";
import {useQuasar} from 'quasar';

export default {
  name: 'InventoryPage',
  components:{
    SearchInput,
    Path
  },
  computed:{
    // Columns values need to be computed for change label when app language is switched
    inventory_columns (){
      let columns = [
        {
          name: "p_name",
          label: this.$t('product'),
          align: "left",
          field: "p_name",
          required: true,
        },
        {
          name: "p_qty",
          label: this.$t('quantity'),
          align: "left",
          field: "p_qty",
          required: true,
        },
        {
          name: "p_local",
          label: this.$t('location'),
          align: "left",
          field: "p_local",
          required: true,
        }
      ]
      return columns
    }
  },
  setup() {
    const DataStoreAux = data_store_dev();
    const Quasar = useQuasar();
    const path_location = path_store();
    const {notifySuccess} = useNotify();

    // For tests purpose
    const test = (path) =>{
      if(path == 'home') path_location.$state.path_location = []
      notifySuccess(path);
    }

    return{
      DataStoreAux,
      path_location,
      Quasar,
      test
    }
  },
}
</script>
