<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import {scan_store} from 'stores/scan_store';

export default defineComponent({
  name: 'App',
  methods:{
    scan_data(value){
      // console.log("This is the received code: " + value)
      const scan_st = scan_store();
      scan_st.read_code(value);
    }
  },
  created: function(){
    window['scan_data']=this.scan_data;
  }
})
</script>
