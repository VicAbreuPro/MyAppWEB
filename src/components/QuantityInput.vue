<template>
  <div class="row q-mt-md">
    <q-icon color="grey" class=" q-mr-md q-ml-sm q-mt-md" name="format_list_bulleted"></q-icon>
    <div class="row" style="height: 5%">
      <MinusButton @click="decrease()"></MinusButton>
    </div>
    <q-input
      v-if="detect.platform.is.desktop"
      style="width: 70%"
      class="form q-ml-sm"
      dense
      v-model.number="aux_p_qty"
      :value="aux_p_qty"
      v-on:input="test"
      :hint="$t('quantity')"
      type="number">
    </q-input>
    <q-input
      v-if="detect.platform.is.mobile"
      style="width: 60%"
      class="form q-ml-sm"
      v-model.number="aux_p_qty"
      dense
      clearable
      :hint="$t('quantity')"
      type="number">
    </q-input>
    <div class="row " style="height: 5%">
      <AddButton @click="increase()"></AddButton>
    </div>
  </div>

</template>

<script>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import AddButton from "src/components/AddButton.vue";
import MinusButton from "src/components/MinusButton.vue";


export default {
  name: "QuantityInput",
  props:{
    p_qty: Number,
    Step: Number
  },
  components:{
    AddButton,
    MinusButton
  },
  setup(props) {
    const detect = useQuasar();
    const aux_p_qty = ref();
    const step_aux = ref();

    const increase = () =>{
      aux_p_qty.value = aux_p_qty.value + props.Step;
    };

    const decrease = () =>{
      if (aux_p_qty.value > 0){
        var calc = aux_p_qty.value - props.Step;
        aux_p_qty.value = calc;
      }
    };

    onMounted(() =>{
      step_aux.value = props.Step
      if(props.p_qty != '' && props.p_qty != null){
        aux_p_qty.value = props.p_qty * 1.00;
      }
    });

    return {
      detect,
      aux_p_qty,
      increase,
      decrease,
      input_rule : [
        val => (val.isIntereger ) || ''
      ]
    };
  },
  methods:{
   emitEvent(){
      this.$emit('emit_p_code', aux_p_code.value)
    }
  },
};
</script>
