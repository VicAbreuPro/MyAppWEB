import { defineStore } from 'pinia';

export const aux_store = defineStore('aux_store', {
    state: () => ({
        active_language: 'pt',
        language_label: 'pt'
    }),
    getters: {},
    actions: {},
    persist: true
});