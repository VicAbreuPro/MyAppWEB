import { defineStore } from 'pinia';

export const globalUser = defineStore('global_user', {
    state: () => ({
        username: '',
        session_id: ''
    }),
    getters: {},
    actions: {},
    persist: true
});