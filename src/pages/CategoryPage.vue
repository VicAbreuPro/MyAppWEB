<template>
  <q-page>
    <div class="row q-mt-lg">
      <div class="col text-left">
        <AddButton
          class="q-ml-md"
          @click="open_dialog_f = true; is_update = false">
        </AddButton>
      </div>
      <div class="col text-right">
        <q-icon class="q-mr-sm" name="sync_alt" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('categories')}}</label>
      </div>
    </div>
    <div v-if="path_name != ''" class="row">
      <div class="col text-right"></div>
      <Path>
        <template v-slot:home>
          <q-icon class="pointer" name="home" size="18px"></q-icon>
        </template>
        <template v-slot:path>
          <label class="pointer" style="text-decoration:underline" v-for="path_element in path_name" :key="path_element">/{{path_element}}</label>
        </template>
      </Path>
    </div>
    <div class="row q-mt-sm justify-center">
      <q-table
        class="q-mr-md q-ml-md"
        :rows="Rows"
        :columns="category_columns"
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
              <label v-if="col.name != 'action_button'">{{$t('category')}}</label>
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @click="open_dialog_l = true; CategoryRow = props.row ; is_update = true">
            <q-td key="action_button" auto-width>
              <AddButton v-if="counter < 2" class="q-mr-xs" @click="search_level(props.row.c_description)"></AddButton>
              <SearchButton @click="redirect_inventory(props.row.c_description)"></SearchButton>
            </q-td>
            <q-td key="c_description" @click="open_dialog_f = true; CategoryRow = props.row ; is_update = true">
              {{props.row.c_description}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <CustomDialog v-model="open_dialog_f">
      <template v-slot:title>
        <label>{{$t('category')}}</label>
      </template>
      <template v-slot:form>
        <CategoryForm :original_form='CategoryRow' :upd_info="is_update"></CategoryForm>
      </template>
    </CustomDialog>
  </q-page>
</template>

<script>
import Path from "src/components/Path.vue";
import StandardButton from "src/components/StandardButton.vue";
import SearchInput from "src/components/SearchField.vue";
import CustomDialog from "src/components/CustomDialog.vue";
import CategoryForm from "src/components/CategoryForm.vue";
import AddButton from "src/components/AddButton.vue";
import SearchButton from "src/components/SearchButton.vue";
import useNotify from "src/composables/notify";
import { ref, onMounted } from "vue";
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';
import {path_store} from "src/stores/path_store";
import { data_store_dev } from "src/stores/data_store";

export default ({
  name: 'CategoryPage',
  components:{
    StandardButton,
    SearchInput,
    AddButton,
    SearchButton,
    CustomDialog,
    CategoryForm,
    Path
  },
  computed:{
    // Columns values need to be computed for change label when app language is switched
    category_columns (){
      let columns = [
        {
          name: "action_button",
          align: "left",
          field: "action_button",
          required: true,
        },
        {
            name: "c_description",
            label: this.$t('category'),
            align: "left",
            field: "c_description",
            required: true,
        }
      ]
      return columns
    }
  },
  setup() {
    const Quasar = useQuasar();
    const router = useRouter();
    const {notifySuccess} = useNotify();
    const DataStoreAux = data_store_dev();
    const PathStore = path_store();
    const Rows = ref([]);
    const path_name = ref([]);            // To alloc string with path name to show on screen
    const CategoryRow = ref([]);
    const counter = ref(0);               // Aux Counter to categories level indicator


    const search_level = (actual_level) =>{

      // check in DB if exist a sub level
      // get from DB list with lower_level ID
      // rows = lower_level list

      if(counter.value == 0) Rows.value = DataStoreAux.$state.categories_l2;
      if(counter.value == 1) Rows.value = DataStoreAux.$state.categories_l3;

      // Add actual level on path array
      path_name.value[counter.value] = actual_level

      //increase counter
      counter.value += 1;
    };

    const redirect_inventory = (location) =>{
      if(counter.value == 0) path_name.value[0] = location
      PathStore.$state.actual_path = location
      path_name.value[counter.value] = location
      PathStore.$state.path_location = path_name
      router.replace({ name: 'InventoryPage' })
    };

    const test = (path) =>{
      if(path == 'home'){
        path_name.value = []
        counter.value = 0
        Rows.value = DataStoreAux.$state.categories_l1
      }
      notifySuccess(path)
    }

    onMounted(() =>{
      counter.value = 0
      Rows.value = DataStoreAux.$state.categories_l1
    });

    return{
      DataStoreAux,
      path_name,
      PathStore,
      Rows,
      CategoryRow,
      counter,
      Quasar,
      open_dialog_f: ref(false),
      search_level,
      redirect_inventory,
      test
    }
  },
})
</script>
