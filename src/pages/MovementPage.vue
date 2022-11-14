<template>
  <q-page>
    <div class="row q-mt-md">
      <div class="col text-left">
        <StandardButton
          icon="file_download"
          rounded
          class="q-ml-md q-mt-xs"
          @click="open_dialog_m = true; is_update = false; move_type_aux=$t('entry')">
        </StandardButton>
        <StandardButton
          icon="file_upload"
          rounded
          class="q-ml-sm q-mt-xs"
          @click="open_dialog_m = true; is_update = false; move_type_aux=$t('exit')">
        </StandardButton>
      </div>
      <div class="text-right">
        <q-icon class="q-mr-sm" name="sync_alt" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('movement_manager')}}</label>
      </div>
    </div>
    <div class="row q-mt-sm">
      <q-table
        v-if="Quasar.platform.is.desktop"
        class="q-mt-sm q-mr-md q-ml-md"
        :rows="DataStoreAux.$state.movements"
        :columns="movement_columns"
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
          <q-tr :props="props" @click="open_dialog_m = true; id_aux = props.row.m_id ; is_update = true; move_type_aux = props.row.p_type">
            <q-td key="p_name">
              {{props.row.p_name}}
            </q-td>
            <q-td key="p_local">
              {{props.row.p_local}}
            </q-td>
            <q-td key="p_qty">
              {{props.row.p_qty}}
            </q-td>
            <q-td key="p_type">
              {{props.row.p_type}}
            </q-td>
            <q-td key="p_date">
              {{props.row.p_date}}
            </q-td>
            <q-td key="p_staff">
              {{props.row.p_staff}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-table
        v-if="Quasar.platform.is.mobile"
        class="q-mt-sm fixed-header"
        :rows="DataStoreAux.$state.movements"
        :columns="movement_columns"
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
          <q-tr :props="props" @click="open_dialog_m = true; id_aux = props.row.m_id ; is_update = true; move_type_aux = props.row.p_type">
            <q-td key="p_name">
              {{props.row.p_name}}
            </q-td>
            <q-td key="p_exit">
              {{props.row.p_local}}
            </q-td>
            <q-td key="p_date">
              {{props.row.p_date}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <CustomDialog v-model="open_dialog_m">
      <template v-slot:title>
        <label>{{$t('movement')}} ({{move_type_aux}})</label>
      </template>
      <template v-slot:form>
        <MovementForm :row_id='id_aux' :upd_info="is_update" :mov_type="move_type_aux">
        </MovementForm>
      </template>
    </CustomDialog>
  </q-page>
</template>

<script>
import {useQuasar} from 'quasar';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {scan_store} from 'src/stores/scan_store';
import { data_store_dev } from 'src/stores/data_store';
import { movementStore } from 'src/stores/MovementSt';
import StandardButton from 'src/components/StandardButton.vue';
import SearchInput from 'src/components/SearchField.vue';
import MovementForm from 'src/components/MovementForm.vue';
import CustomDialog from 'src/components/CustomDialog.vue';
import AddButton from 'src/components/AddButton.vue';

const movementStore_st = movementStore();

export default ({
  name: 'MovementPage',
  components:{
    StandardButton,
    SearchInput,
    MovementForm,
    CustomDialog,
    AddButton
  },
  computed:{
    movement_columns (){
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
            name: "p_local",
            label: this.$t('location'),
            align: "left",
            field: "p_local",
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
            name: "p_type",
            label: this.$t('type'),
            align: "left",
            field: "p_type",
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
            name: "p_staff",
            label: this.$t('staff'),
            align: "left",
            field: "p_staff",
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
            name: "p_local",
            label: this.$t('location'),
            align: "left",
            field: "p_local",
            required: true,
          },
          {
            name: "p_date",
            label: this.$t('date'),
            align: "left",
            field: "p_date",
            required: true,
          }
        ]
        return columns
      }
    }
  },
  setup() {
    const Quasar = useQuasar();
    const router = useRoute();
    const scan_st = scan_store();
    const DataStoreAux = data_store_dev();
    const open_dialog_m = ref(false);
    const id_aux = ref();
    const move_type_aux = ref('');

    onMounted(() =>{
      if(scan_st.code != '' && scan_st.code != null)open_dialog_m.value = true;
    });

    return{
      Quasar,
      router,
      scan_st,
      DataStoreAux,
      open_dialog_m,
      id_aux,
      is_update: ref(false),
      move_type_aux,
      movementStore_st
    }
  },
})
</script>


