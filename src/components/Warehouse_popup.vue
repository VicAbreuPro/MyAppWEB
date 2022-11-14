<template>
  <div class="row justify-center">
    <StandardButton
        style="width: 10%; height: 10%; font-size: 12px;"
        label="Novo Artigo"
        class="q-ml-md"
        @click="persistent_add = true"
      />
      <StandardButton
        style="width: 12%; height: 10%; font-size: 12px;"
        class="q-ml-sm"
        label="Pesquisa Avançada"
        @click="toggle_search_opt()"
      />
  </div>
  <div class="row q-mt-sm justify-center">
      <q-table
        title="Artigos"
        class="q-mt-sm fixed-header"
        :rows="rows"
        :columns="columns"
        dense
        :rows-per-page-options="[10, 20, 30, 40]"
        style="height: 40%"
        auto-width>

        <template v-slot:top v-if="toggle_search">
        <div class="row justify-center">
          <q-input color="primary" label="Artigo" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Código" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Serial" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Referência" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label=" Valor" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Data de Entrada" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Corredor" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
          <q-input class="q-ml-sm" label="Prateleira" dense style="width: 10%">
            <template v-slot:append>
              <q-icon name="search" color="grey" />
            </template>
          </q-input>
        </div>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="action_button" :props="props">
              <q-btn
                size="sm"
                color="blue"
                round
                dense
                @click="toggle_movement = true"
                :icon="props.row.expand ? 'sync_alt' : 'sync_alt'"
              />
              <q-btn
                class="q-ml-sm"
                size="sm"
                color="red"
                round
                dense
                :icon="props.row.expand ? 'delete' : 'delete'"
              />

            </q-td>

            <q-td key="p_name" :props="props">
              {{ props.row.p_name }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_code" :props="props">
              {{ props.row.p_code }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_serial" :props="props">
              {{ props.row.p_serial }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_ref" :props="props">
              {{ props.row.p_ref }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_qty" :props="props">
              {{ props.row.p_qty }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_value" :props="props">
              {{ props.row.p_value }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_date" :props="props">
              {{ props.row.p_date }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_local_1" :props="props">
              {{ props.row.p_local_1 }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
            <q-td key="p_local_2" :props="props">
              {{ props.row.p_local_2 }}
              <q-popup-edit style="width: 30%" >
                <div class="row text-h6 justify-center">Atualizar Artigo</div>
                <new_product
                @submit.prevent="add_User(u_form_aux)"
                @emit_form="get_form"/>
              </q-popup-edit>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="persistent_add" transition-show="scale" transition-hide="scale" maximized>
      <q-card style="width: 600px">
        <q-card-section>
          <div class="row text-h6 justify-center">Adicionar novo artigo</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <new_product
            @submit.prevent="add_User(u_form_aux)"
            @emit_form="get_form"/>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="toggle_movement" transition-show="scale" transition-hide="scale" maximized>
      <q-card style="width: 30%; height: 25%">
        <q-card-section>
          <div class="row text-h6 justify-center">Mover artigo</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-select label="Novo Local" dense autofocus counter :options="type_options" />
          <StandardButton label="Mover"></StandardButton>
        </q-card-section>
      </q-card>
    </q-dialog>
    
</template>

<script>
import { defineComponent, ref } from "vue";
import StandardButton from "src/components/StandardButton.vue";
import new_product from 'src/components/ProductForm.vue';


const columns = [
  {
    name: "action_button",
    align: "left",
    required: true,
  },
  {
    name: "p_name",
    label: "Nome Artigo",
    align: "left",
    field: "p_name",
    sortable: true,
    required: true,
  },
  {
    name: "p_code",
    label: "Código de Produto",
    align: "left",
    field: "p_code",
    sortable: true,
    required: true,
  },
  {
    name: "p_serial",
    label: "Numero de Série",
    align: "left",
    field: "p_serial",
    required: true,
  },
  {
    name: "p_ref",
    label: "Referência",
    align: "left",
    field: "p_ref",
    sortable: true,
    required: true,
  },
  {
    name: "p_qty",
    label: "Quantidade",
    align: "right",
    field: "p_qty",
    sortable: true,
    required: true,
  },
  {
    name: "p_value",
    label: "Valor",
    align: "right",
    field: "p_value",
    sortable: true,
    required: true,
  },
  {
    name: "p_date",
    label: "Data de Entrada",
    align: "center",
    field: "p_date",
    sortable: true,
    required: true,
  },
  {
    name: "p_local_1",
    label: "Corredor",
    align: "left",
    field: "p_local_1",
    sortable: true,
    required: true,
  },
  {
    name: "p_local_2",
    label: "Prateleira",
    align: "left",
    field: "p_local_2",
    sortable: true,
    required: true,
  }
];

const rows = [
  {
    p_name: 'mesa jantar',
    p_code: 'cd123456',
    p_serial: 1234567,
    p_ref: 'rf354635',
    p_qty: 23,
    p_value: 249.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 1',
    p_local_1: 'Corredor 1',
    p_local_2: 'Prateleira 1'
  },
  {
    p_name: 'armário madeira',
    p_code: 'cd1232786',
    p_serial: 1230967,
    p_ref: 'rf355835',
    p_qty: 12,
    p_value: 549.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 1',
    p_local_1: 'Corredor 2',
    p_local_2: 'Prateleira 2'
  },
  {
    p_name: 'mesa office',
    p_code: 'cd182456',
    p_serial: 3324567,
    p_ref: 'rf398775',
    p_qty: 35,
    p_value: 349.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 1',
    p_local_1: 'Corredor 1',
    p_local_2: 'Prateleira 2'
  },
  {
    p_name: 'cadeira jantar',
    p_code: 'cd127536',
    p_serial: 1271167,
    p_ref: 'rf990635',
    p_qty: 100,
    p_value: 49.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 2',
    p_local_1: 'Corredor 1',
    p_local_2: 'Prateleira 4'
  },
  {
    p_name: 'cadeira ofice standart',
    p_code: 'cd667456',
    p_serial: 1887567,
    p_ref: 'rf350095',
    p_qty: 80,
    p_value: 79.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 2',
    p_local_1: 'Corredor 1',
    p_local_2: 'Prateleira 7'
  },
  {
    p_name: 'poltrona premium',
    p_code: 'cd124416',
    p_serial: 1288967,
    p_ref: 'rf344635',
    p_qty: 60,
    p_value: 349.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 3',
    p_local_1: 'Corredor 3',
    p_local_2: 'Prateleira 8'
  },
  {
    p_name: 'banco jardim',
    p_code: 'cd744456',
    p_serial: 1772567,
    p_ref: 'rf311335',
    p_qty: 35,
    p_value: 289.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 3',
    p_local_1: 'Corredor 3',
    p_local_2: 'Prateleira 5'
  },
  {
    p_name: 'cadeira office deluxe',
    p_code: 'cd100556',
    p_serial: 1234567,
    p_ref: 'r4464635',
    p_qty: 15,
    p_value: 749.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 5',
    p_local_1: 'Corredor 5',
    p_local_2: 'Prateleira 2'
  },
  {
    p_name: 'bancada cozinha 2x2',
    p_code: 'cd12900556',
    p_serial: 123554367,
    p_ref: 'rf113635',
    p_qty: 200,
    p_value: 119.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 6',
    p_local_1: 'Corredor 3',
    p_local_2: 'Prateleira 2'
  },
  {
    p_name: 'bancada garagem 3x3',
    p_code: 'cd127756',
    p_serial: 1239987,
    p_ref: 'rf333535',
    p_qty: 230,
    p_value: 849.90,
    p_date: '01/01/2022',
    p_local: 'Armazém 2',
    p_local_1: 'Corredor 2',
    p_local_2: 'Prateleira 2'
  }
]

export default defineComponent({
  name: "Warehouse_popup",
  components: {
    StandardButton,
    new_product,
    StandardButton
},
  setup(){
    const toggle_search = ref(false)
    return{
      rows,
      columns,
      toggle_search,
      persistent_add: ref(false),
      toggle_movement: ref(false),
      toggle_search_opt() {
        toggle_search.value = !toggle_search.value;
      },
      nameRules: [
        val => (val && val.length > 0) || 'Filed is Required!'
      ],
      type_options:[
        'Armazém 1', 'Armazém 2', 'Armazém 3', 'Armazém 4', 'Armazém 5', 'Armazém 6', 'Armazém 7', 'Armazém 8', 'Armazém 9', 'Armazém 10'
      ]
    }
  },
  methods:{
    emitEvent(){
      this.$emit('emit_form', user_form.value)
    }
  }
})
</script>
