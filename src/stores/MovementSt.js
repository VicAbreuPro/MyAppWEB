import { defineStore } from 'pinia';

export const movementStore = defineStore('supportCam', {
    state: () => ({
        product: [],
        movement_qty: 0,
        product_code: '',
        operationType: '',
        product_name: '',
        movement_date: '',
    }),
    getters: {},
    actions: {},
    persist: true
});
