<template>
  <q-form v-model="location_form" @change="emitEvent" style="width: 100%; max-width: 1500px">
    <div class="">
      <div class="row">
        <q-icon color="black" class=" q-mr-sm q-mt-md q-ml-sm" name="groups"></q-icon>
        <q-input
          v-if="detect.platform.is.desktop"
          style="width: 94%"
          dense
          clearable
          v-model="category_form.c_description"
          type="text"
          hint="Descrição">
        </q-input>
        <q-input
          v-if="detect.platform.is.mobile"
          style="width: 80%"
          class="form q-ml-sm"
          dense
          clearable
          v-model="category_form.c_description"
          type="text"
          hint="Descrição">
        </q-input>
      </div>
      <q-card-actions align="right" class="text-teal">
        <q-btn
          v-if="detect.platform.is.mobile"
          style="margin-top: 165%"
          class="q-mr-sm"
          flat
          label="CONFIRMAR"
          v-close-popup
          type="submit"/>
        <q-btn
          v-if="detect.platform.is.desktop"
          style="margin-top: 40%"
          flat
          class="q-mr-sm"
          label="CONFIRMAR"
          v-close-popup
          type="submit"/>
      </q-card-actions>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import StandardButton from "src/components/StandardButton.vue";
import { useQuasar } from 'quasar'

const category_form = ref({
  c_id: '',
  c_description: ''
})

export default defineComponent({
  name: "CategoryForm",
  props:{
    upd_info: Boolean,
    original_form: [Array, Object]
  },
  components:{
    StandardButton
  },
  setup(props){
    const detect = useQuasar();
    const is_update_aux = ref(false);

    const is_upd = () =>{
      is_update_aux.value = props.upd_info
      if(props.upd_info == true){
        category_form.value = props.original_form
      } else{
        category_form.value = []
      }
    };

    onMounted(() =>{
      is_upd()
    });

    return{
      detect,
      category_form,
      is_update_aux
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', category_form.value)
    }
  }
})
</script>
