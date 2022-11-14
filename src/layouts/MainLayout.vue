<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          WEB UI
        </q-toolbar-title>
        <div class="q-mr-sm q-mt-xs">{{$t('user')}}: <span style="color:white"><strong> {{user.$state.username}}</strong> </span>  </div>
        <LanguageButton @click="toggle_language = !toggle_language"></LanguageButton>
        <q-toggle
          class="q-mr-md"
          color="blue"
          dark
          v-model="theme_toggle"
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="200">
      <q-list>
        <q-item-label header>{{$t('main_menu')}}</q-item-label>
        <q-item clickable @click="left_menu('HomePage')">
          <q-icon name="house" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('home_page')}}</label>
        </q-item>
        <q-separator></q-separator>
        <q-item clickable @click="left_menu('MovementPage')">
          <q-icon name="sync_alt" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('movements')}}</label>
        </q-item>
        <q-item clickable @click="left_menu('InventoryPage')">
          <q-icon name="inventory_2" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('inventory')}}</label>
        </q-item>
        <q-separator></q-separator>
        <q-item clickable @click="left_menu('ProductPage')">
          <q-icon name="dashboard_customize" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('products')}}</label>
        </q-item>
        <q-item clickable @click="left_menu('LocationPage')">
          <q-icon name="warehouse" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('locations')}}</label>
        </q-item>
        <q-item clickable @click="left_menu('CategoryPage')">
          <q-icon name="category" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('categories')}}</label>
        </q-item>
        <q-separator></q-separator>
        <q-item clickable @click="left_menu('UserPage')">
          <q-icon name="people" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('users')}}</label>
        </q-item>
        <q-item clickable @click="left_menu('LoginPage')">
          <q-icon name="logout" size="25px"></q-icon>
          <label class="q-mt-xs q-ml-lg">{{$t('logout')}}</label>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onServerPrefetch } from 'vue';
import {aux_store} from "src/stores/aux_store";
import {globalUser} from "src/stores/user_store";
import {useRouter} from 'vue-router';
import { useQuasar } from 'quasar';
import LanguageButton from 'src/components/LanguageButton.vue';

export default defineComponent({
  name: 'MainLayout',
  components:{
    LanguageButton
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const user = globalUser();
    const quasar = useQuasar();
    const aux = aux_store();

    const left_menu = async (value) => {
      router.push({ name: value });
    };

    onServerPrefetch(() => {
      if(aux.$state.active_language== 'pt'){
        aux.$state.language_label = 'PT'
      }else{
        aux.$state.language_label = 'en'
      }
    });

    onMounted(() => {
      if(aux.$state.active_language == 'pt'){
        aux.$state.language_label = 'PT'
      }else{
        aux.$state.language_label = 'en'
      }
    });

    return {
      aux,
      quasar,
      user,
      left_menu,
      theme_toggle: ref(false),
      toggle_language: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
  watch:{
    theme_toggle(value){
      this.quasar.dark.set(value)
    },
    toggle_language(value){
      if(value == false){
        this.aux.$state.active_language = 'pt'
        this.aux.$state.language_label = 'PT'
        this.$i18n.locale = 'pt-PT'
      }
      else{
        this.aux.$state.active_language = 'en'
        this.aux.$state.language_label = 'EN'
        this.$i18n.locale = 'en-US'
      }
    }
  }
})
</script>
