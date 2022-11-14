import { defineStore } from 'pinia';

export const path_store = defineStore('path_store', {
    state: () => ({
        actual_path: '',
        path_location: [], //Main form
        aux_code: ''
    }),
    getters: {},
    actions: {},
    persist: true
});