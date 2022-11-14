<template>
  <q-page >
    <div>
      <div class="q-mt-xl q-pt-xl">
        <q-form @submit.prevent="New_login">
          <div class="row justify-center">
          <q-icon class="q-mt-lg" name="person"></q-icon>
          <q-input
            v-model="userform.username"
            class="q-ml-lg"
            type="text"
            style="width: 30%"
            label="Username">
          </q-input>
          </div>
          <div class="row justify-center">
            <q-icon class="q-mt-lg" name="key"></q-icon>
            <q-input
              v-model="userform.password"
              class=" q-ml-lg"
              type="password"
              style="width: 30%"
              label="Password">
            </q-input>
          </div>
          <div class="q-mt-xl row justify-center">
            <StandardButton
              label="Login"
              style="width: 32.5%"
              v-on:click="New_login()">
            </StandardButton>
          </div>
        </q-form>

      </div>

    </div>

  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import {useRouter} from 'vue-router';
import {globalUser} from "src/stores/user_store";
import useNotify from "src/composables/notify";
import StandardButton from "src/components/StandardButton.vue";

export default defineComponent({
  name: 'LoginPage',
  components :{
    StandardButton
  },

  setup(){
    const user = globalUser();
    const router = useRouter();
    const {notifySuccess} = useNotify();

    const userform = ref({
      username: '',
      password: ''
    })
    const New_login = async() =>{
      user.$state.username = userform.value.username
      notifySuccess("Bem Vindo " + user.$state.username)
      router.replace({name: 'HomePage'})
    }

    return{
      user,
      New_login,
      userform
    }
  },
})
</script>
