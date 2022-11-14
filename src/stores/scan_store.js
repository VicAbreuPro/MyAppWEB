import { defineStore } from 'pinia';

export const scan_store = defineStore('scan_store', {
    state: () => ({
        isAllowed: 'deny',
        status: '',
        code: '',
        code_temp_history: [],
        read_field: 0,
    }),
    getters: {
      get_code(state){
        return state.code;
      }
    },
    actions: {
      read_code(code_input){
          this.code = code_input;
          this.code_temp_history.push(code_input);
      }
    },
    persist: true
});
