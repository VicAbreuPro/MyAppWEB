<template>
  <q-page>
    <div class="row q-mt-md">
      <div class="col text-left">
        <AddButton
          class="q-ml-md"
          @click="open_dialog_l = true; is_update = false">
        </AddButton>
      </div>
      <div class="text-right">
        <q-icon class="q-mr-sm" name="warehouse" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('locations')}}</label>
      </div>
    </div>
    <div v-if="path_name != ''" class="row">
      <div class="col text-right"></div>
      <Path>
        <template v-slot:home>
          <q-icon class="pointer" @click="test('home')" name="home" size="18px"></q-icon>
        </template>
        <template v-slot:path>
          <label class="pointer" @click="test(path_element)" style="text-decoration:underline" v-for="path_element in path_name" :key="path_element">/{{path_element}}</label>
        </template>
      </Path>
    </div>
    <div class="row q-mt-sm justify-center">
      <q-table
        class="q-ml-md q-mr-md fixed-header"
        :columns="location_columns"
        :rows="rows_aux"
        dense
        :rows-per-page-options="[10, 20, 30, 40]"
        style="height: 40%; width: 100%">

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props">
              <SearchInput class="q-mb-xs"  v-if="col.name != 'action_button'">
              </SearchInput>
              {{col.label}}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="action_button" auto-width>
              <AddButton v-if="counter < 2" class="q-mr-xs" @click="search_level(props.row.l_local_1)"></AddButton>
              <SearchButton @click="redirect_inventory(props.row.l_local_1)"></SearchButton>
            </q-td>
            <q-td key="l_local_1" @click="open_dialog_l = true; id_aux = props.row.l_id ; is_update = true">
              {{props.row.l_local_1}}
            </q-td>
            <q-td key="l_description" @click="open_dialog_l = true; id_aux = props.row.l_id ; is_update = true">
              {{props.row.l_description}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <CustomDialog v-model="open_dialog_l">
      <template v-slot:title>
        <label>{{$t('location')}}</label>
      </template>
      <template v-slot:form>
        <LocationForm :row_id='id_aux' :upd_info="is_update"></LocationForm>
      </template>
    </CustomDialog>
  </q-page>
</template>

<script>
import StandardButton from "src/components/StandardButton.vue";
import SearchInput from "src/components/SearchField.vue";
import LocationForm from "src/components/LocationForm.vue";
import CustomDialog from "src/components/CustomDialog.vue";
import AddButton from "src/components/AddButton.vue";
import BackButton from "src/components/BackButton.vue";
import SearchButton from "src/components/SearchButton.vue";
import Path from "src/components/Path.vue";
import useNotify from "src/composables/notify";
import {useQuasar} from 'quasar';
import { ref, onMounted } from "vue";
import {useRouter} from 'vue-router';
import {path_store} from "src/stores/path_store";
import { data_store_dev } from "src/stores/data_store";


export default {
  name: 'LocationPage',
  components:{
    StandardButton,
    CustomDialog,
    LocationForm,
    SearchInput,
    AddButton,
    BackButton,
    SearchButton,
    Path
  },
  computed:{
    // Columns values need to be computed for change label when app language is switched
    location_columns (){
      let columns = [
        {
          name: "action_button",
          align: "left",
          field: "action_button",
          required: true,
        },
        {
          name: "l_local_1",
          label: this.$t('location'),
          align: "left",
          field: "l_local_1",
          required: true,
        },
        {
          name: "l_description",
          label: this.$t('description'),
          align: "left",
          field: "l_description",
          required: true,
        }
      ]
      return columns
    }
  },
  setup() {
    const Quasar = useQuasar();
    const router = useRouter();
    const DataStoreAux = data_store_dev();
    const {notifySuccess} = useNotify();
    const rows_aux = ref([]);
    const path_name = ref([]);
    const path_location = path_store();
    const counter = ref(0);
    const id_aux = ref();


    const search_level = (actual_level) =>{

      // check in DB if exist a sub level
      // get from DB list with lower_level ID
      // rows = lower_level list

      if(counter.value == 0) rows_aux.value = DataStoreAux.$state.locations.slice(10,19);
      if(counter.value == 1) rows_aux.value = DataStoreAux.$state.locations.slice(19, 30);

      // Add actual level on path array
      path_name.value[counter.value] = actual_level

      //increase counter
      counter.value += 1;
    };

    const redirect_inventory = (location) =>{
      if(counter.value == 0) path_name.value[0] = location
      path_location.$state.actual_path = location
      path_name.value[counter.value] = location
      path_location.$state.path_location = path_name
      router.replace({ name: 'InventoryPage' })
    };

    const test = (path) =>{
      if(path == 'home'){
        path_name.value = []
        counter.value = 0
        rows_aux.value = DataStoreAux.$state.locations
      }
      notifySuccess(path)
    }

    onMounted(() =>{
      counter.value = 0
      rows_aux.value = DataStoreAux.$state.locations.slice(0,9);
    });

    return{
      DataStoreAux,
      rows_aux,
      counter,
      path_name,
      path_location,
      id_aux,
      Quasar,
      open_dialog_l: ref(false),
      search_level,
      redirect_inventory,
      test
    }
  },
}
</script>
