<template>
  <q-page>
    <div class="row q-mt-md">
      <div class="col text-left">
        <AddButton
          class="q-ml-md"
          @click="open_dialog_u = true">
        </AddButton>
      </div>
      <div class="col text-right">
        <q-icon class="q-mr-xs" name="people" size="28px" style="color:black"></q-icon>
        <label class="text-h6 q-mr-md">{{$t('users')}}</label>
      </div>
    </div>
    <div class="q-mt-sm">
      <q-table
        style="height: 60%;"
        dense
        :rows="user_list"
        :columns="user_columns"
        :rows-per-page-options="[50, 75, 100, 150, 200]"
        class="q-ml-md q-mr-md">

      </q-table>
    </div>
    <CustomDialog v-model="open_dialog_u">
      <template v-slot:title>
        <label>{{$t('user')}}</label>
      </template>
      <template v-slot:form>
        <User_form></User_form>
      </template>
    </CustomDialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onServerPrefetch } from 'vue';
import CustomDialog from "src/components/CustomDialog.vue";
import User_form from 'src/components/User_form.vue';
import StandardButton from "src/components/StandardButton.vue";
import AddButton from "src/components/AddButton.vue";
import {useQuasar} from 'quasar';

export default defineComponent({
  name: 'UsersPage',
  components:{
    CustomDialog,
    User_form,
    StandardButton,
    AddButton,
    User_form
  },
  computed:{
    user_columns (){
      let columns = [
        {
          name: 'username_column',
          label: this.$t('username'),
          align: 'left',
          field: 'Username',
          sortable: true
        },
        { name: 'User type', align: 'left', label: this.$t('user_type'), field: 'User_type'},
      ]
      return columns
    }
  },
  setup() {
    const user_list = ref([]);
    const users_table = ref(false);
    const Quasar = useQuasar();
    const form_aux = ref([]);

    onMounted(() =>{});

    return{
      users_table,
      form_aux,
      Quasar,
      type_options:[
        'Admin', 'Staff1', 'Staff2'
      ],
      user_list,
      open_dialog_u: ref(false)
    }
  }
})
</script>
