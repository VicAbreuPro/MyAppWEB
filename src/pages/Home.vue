<template>
  <q-page>
    <div class="row justify-center">
      <label class="text-h5 q-mt-xl">{{$t('welcome_message')}} <strong>{{user.$state.username}} </strong></label>
    </div>
    <div class="row justify-center q-mt-xl">
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import {globalUser} from "src/stores/user_store";
import { useQuasar } from 'quasar';

export default({
  name: 'HomePage',
  setup(){
    const Quasar = useQuasar();
    const user = globalUser();

    const userform = ref({
      username: '',
      password: ''
    });

    return{
      Quasar,
      user,
      userform
    }
  }
})
</script>
