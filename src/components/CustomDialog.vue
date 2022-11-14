<template>
  <q-dialog persistent :maximized="maximizedToggle">
    <div :class="{'bg-white text-white': Quasar.dark.isActive == false, 'bg-black text-white': Quasar.dark.isActive == true}" style="width: 100%">
      <q-bar class="bg-primary ">
        <div style="margin-top: 1px">
          <slot name="title"></slot>
        </div>
        <q-space />
        <q-btn v-if="Quasar.platform.is.desktop" dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
          <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
        </q-btn>
        <q-btn v-if="Quasar.platform.is.desktop" dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
          <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <div style="padding-top: 10px" >
        <slot name="form"></slot>
      </div>
    </div>
  </q-dialog>

</template>

<script>
import { ref, onMounted, computed } from 'vue';
import {useQuasar} from 'quasar';

export default {
  name:'CustomDialog',
  setup() {
    const Quasar = useQuasar();
    const maximizedToggle = ref(false);

    const is_mobile = () =>{
      if(Quasar.platform.is.mobile){
        maximizedToggle.value = true
      }
    }

    onMounted(() =>{
      is_mobile()
    });

    return{
      Quasar,
      maximizedToggle
    }
  },
}
</script>
