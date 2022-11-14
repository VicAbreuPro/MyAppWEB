<template>
  <q-form v-model="user_form" @change="emitEvent">
    <div class="">
      <div class="row">
        <q-icon color="grey" class="q-mr-sm q-mt-md q-ml-sm" name="person"></q-icon>
        <q-input
          style="width: 94%"
          dense
          clearable
          v-model="user_form.username"
          type="text"
          label="Username">
        </q-input>
      </div>

      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="password"></q-icon>
        <q-input
          style="width: 94%"
          dense
          clearable
          v-model="user_form.password"
          type="text"
          label="Password">
        </q-input>
      </div>
      <div class="row">
        <q-icon color="grey" class=" q-mr-sm q-mt-md q-ml-sm" name="badge"></q-icon>
        <q-select
          style="width: 94%"
          :options="type_options"
          dense
          clearable
          v-model="user_form.user_type"
          type=""
          label="User type">
        </q-select>
      </div>
      <q-card-actions align="right" class="text-teal">
        <q-btn
          v-if="detect.platform.is.desktop"
          flat
          label="CONFIRM"
          v-close-popup
          type="submit"/>
        <q-btn
          v-if="detect.platform.is.mobile"
          class="q-mr-md"
          style="margin-top: 145%"
          flat
          label="CONFIRM"
          v-close-popup
          type="submit"/>
      </q-card-actions>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from 'quasar';

const user_form = ref({
  username: '',
  password: '',
  user_type: ''
})
export default defineComponent({
  name: "User_form",
  setup(){
    const detect = useQuasar();
    return{
      detect,
      user_form,
      nameRules: [
        val => (val && val.length > 0) || 'Filed is Required!'
      ],
      type_options:[
        'Admin', 'Staff', 'Técnico'
      ],
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', user_form.value)
    }
  }
})
</script>
