import { defineStore } from 'pinia';

export const movement_store = defineStore('movement_store', {
    state: () => ({
        m_row_id: [],
        movement: []
    }),
    getters: {},
    actions: {
        get_movements() {
            try {

            } catch (error) {

            }

        },
        add_movement() {
            try {

            } catch (error) {

            }
        },
        upd_movements() {
            try {

            } catch (error) {

            }
        },
        del_movements() {
            try {

            } catch (error) {

            }
        }
    },
    persist: true
});

export const product_store = defineStore('product_store', {
    state: () => ({
        p_row_id: [],
        product: []
    }),
    getters: {},
    actions: {
        get_products() {
            try {

            } catch (error) {

            }
        },
        add_product() {
            try {

            } catch (error) {

            }
        },
        upd_product() {
            try {

            } catch (error) {

            }
        },
        del_product() {
            try {

            } catch (error) {

            }
        }
    },
    persist: true
});

export const location_store = defineStore('location_store', {
    state: () => ({
        l_row_id: '',
        location: []
    }),
    getters: {},
    actions: {
        get_locations() {
            try {

            } catch (error) {

            }
        },
        add_location() {
            try {

            } catch (error) {

            }
        },
        upd_location() {
            try {

            } catch (error) {

            }
        },
        del_location() {
            try {

            } catch (error) {

            }
        }
    },
    persist: true
});

export const category_store = defineStore('category_store', {
    state: () => ({
        c_row_id: [],
        category: []
    }),
    getters: {},
    actions: {
        get_categories() {
            try {

            } catch (error) {

            }
        },
        add_category() {
            try {

            } catch (error) {

            }
        },
        upd_category() {
            try {

            } catch (error) {

            }
        },
        del_category() {
            try {

            } catch (error) {

            }
        }
    },
    persist: true
});

export const data_store_dev = defineStore('data_store_dev', {
    state: () => ({
        inventory: [{
                p_name: 'contraplacado 3x3',
                p_code: 'cd123456',
                p_serial: 1234567,
                p_qty: 23,
                p_value: 249.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 1'
            },
            {
                p_name: 'rolo de fio 25m',
                p_code: 'cd1232786',
                p_serial: 1230967,
                p_ref: 'rf355835',
                p_qty: 12,
                p_value: 549.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 1'
            },
            {
                p_name: 'rolo de arame 25m',
                p_code: 'cd182456',
                p_serial: 3324567,
                p_ref: 'rf398775',
                p_qty: 35,
                p_value: 349.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 1'
            },
            {
                p_name: 'tela 5x5',
                p_code: 'cd127536',
                p_serial: 1271167,
                p_ref: 'rf990635',
                p_qty: 100,
                p_value: 49.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 2'
            },
            {
                p_name: 'placa metalica 3x1',
                p_code: 'cd667456',
                p_serial: 1887567,
                p_ref: 'rf350095',
                p_qty: 80,
                p_value: 79.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 2'
            },
            {
                p_name: 'tubo de aço quadrado 3m',
                p_code: 'cd124416',
                p_serial: 1288967,
                p_ref: 'rf344635',
                p_qty: 60,
                p_value: 349.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 3'
            },
            {
                p_name: 'poste angular 4m',
                p_code: 'cd744456',
                p_serial: 1772567,
                p_ref: 'rf311335',
                p_qty: 35,
                p_value: 289.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 3'
            },
            {
                p_name: 'chapa xadrex 2x4',
                p_code: 'cd100556',
                p_serial: 1234567,
                p_ref: 'r4464635',
                p_qty: 15,
                p_value: 749.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 5'
            },
            {
                p_name: 'painel ondulado 5x4',
                p_code: 'cd12900556',
                p_serial: 123554367,
                p_ref: 'rf113635',
                p_qty: 200,
                p_value: 119.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 6'
            },
            {
                p_name: 'painel canelado 3x4',
                p_code: 'cd127756',
                p_serial: 1239987,
                p_ref: 'rf333535',
                p_qty: 230,
                p_value: 849.90,
                p_date: '01/01/2022',
                p_local: 'Armazém 2'
            },
        ],
        movements: [{
                m_id: 1,
                p_code: '375ll7',
                p_name: 'placa de madeira 5x6',
                p_local: 'Armazém 3',
                p_local_code: '8O413A',
                p_type: 'Saída',
                p_qty: 34,
                p_date: '02/02/2022',
                p_staff: 'Staff1',
            },
            {
                m_id: 2,
                p_code: 'ydkwka',
                p_name: 'cadeira jantar',
                p_local: 'Armazém 7',
                p_local_code: '8570HM',
                p_type: 'Entrada',
                p_qty: 12,
                p_date: '02/02/2022',
                p_staff: 'Staff2',
            },
            {
                m_id: 3,
                p_code: 'gdkphr',
                p_name: 'mesa jantar',
                p_local: 'Armazém 8',
                p_local_code: '86FBE8',
                p_type: 'Saída',
                p_qty: 2,
                p_date: '02/02/2022',
                p_staff: 'Staff3',
            },
            {
                m_id: 4,
                p_code: '79bh5y',
                p_name: 'placa granito 2x5',
                p_local: 'Armazém 1',
                p_local_code: 'R563MI',
                p_type: 'Entrada',
                p_qty: 4,
                p_date: '02/02/2022',
                p_staff: 'Staff4',
            },
            {
                m_id: 5,
                p_code: 'n94t8u',
                p_name: 'puxadores metal ',
                p_local: 'Armazém 9',
                p_local_code: '50LS8M',
                p_type: 'Saída',
                p_qty: 60,
                p_date: '02/02/2022',
                p_staff: 'Staff5',
            },
            {
                m_id: 6,
                p_code: 'vhpv37',
                p_name: 'parafuso 12mm',
                p_local: 'Armazém 3',
                p_local_code: 'V4H34R',
                p_type: 'Entrada',
                p_qty: 500,
                p_date: '02/02/2022',
                p_staff: 'Staff6',
            },
            {
                m_id: 7,
                p_code: 'nvrhfz',
                p_name: 'bancada cozinha 2x2',
                p_local: 'Armazém 3',
                p_local_code: '75D9XO',
                p_type: 'Saída',
                p_qty: 20,
                p_date: '02/02/2022',
                p_staff: 'Staff7',
            },
            {
                m_id: 8,
                p_code: 'dyxe6s',
                p_name: 'armário médio',
                p_local: 'Armazém 4',
                p_local_code: '13Z87V',
                p_type: 'Entrada',
                p_qty: 5,
                p_date: '02/02/2022',
                p_staff: 'Staff8',
            }
        ],
        products: [{
                p_id: 1,
                p_name: 'mesa jantar',
                p_code: 'cd123456',
                p_qty: 23,
                p_value: 249.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 1, Corredor 3, Estante 4',
                p_local_code: '566974'
            },
            {
                p_id: 2,
                p_name: 'armário madeira',
                p_code: 'cd1232786',
                p_qty: 12,
                p_value: 549.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 1, Corredor 5, Estante 8',
                p_local_code: '837722'
            },
            {
                p_id: 3,
                p_name: 'mesa office',
                p_code: 'cd182456',
                p_qty: 35,
                p_value: 349.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 1, Corredor 2, Estante 6',
                p_local_code: '574743'
            },
            {
                p_id: 4,
                p_name: 'cadeira jantar',
                p_code: 'cd127536',
                p_qty: 100,
                p_value: 49.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 2, Corredor 1, Estante 7',
                p_local_code: '558385'
            },
            {
                p_id: 5,
                p_name: 'cadeira ofice standart',
                p_code: 'cd667456',
                p_qty: 80,
                p_value: 79.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 2, Corredor 6, Estante 10',
                p_local_code: '347757'
            },
            {
                p_id: 6,
                p_name: 'poltrona premium',
                p_code: 'cd124416',
                p_qty: 60,
                p_value: 349.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 3, Corredor 8, Estante 2',
                p_local_code: '434368'
            },
            {
                p_id: 7,
                p_name: 'banco jardim',
                p_code: 'cd744456',
                p_qty: 35,
                p_value: 289.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 3, Corredor 1, Estante 7',
                p_local_code: '233484'
            },
            {
                p_id: 8,
                p_name: 'cadeira office deluxe',
                p_code: 'cd100556',
                p_qty: 15,
                p_value: 749.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 5, Corredor 6, Estante 9',
                p_local_code: '774962'
            },
            {
                p_id: 9,
                p_name: 'bancada cozinha 2x2',
                p_code: 'cd12900556',
                p_qty: 200,
                p_value: 119.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 6, Corredor 8, Estante 3',
                p_local_code: '234834'
            },
            {
                p_id: 10,
                p_name: 'bancada garagem 3x3',
                p_code: 'cd127756',
                p_qty: 230,
                p_value: 849.90,
                p_date: '2022/01/01',
                p_local: 'Armazém 2, Corredor 1, Estante 2',
                p_local_code: '337852'
            }
        ],
        locations: [{
                l_id: 1,
                l_local_1: 'Armazém 1',
                l_description: 'Artigos de madeira',
                l_code: '1234567'
            },
            {
                l_id: 2,
                l_local_1: 'Armazém 2',
                l_description: 'Materiais eletrònicos',
                l_code: '7654321'
            },
            {
                l_id: 3,
                l_local_1: 'Armazém 3',
                l_description: 'Móveis',
                l_code: '2345678'
            },
            {
                l_id: 4,
                l_local_1: 'Armazém 4',
                l_description: 'Artigos variados',
                l_code: '8765432'
            },
            {
                l_id: 5,
                l_local_1: 'Armazém 5',
                l_description: 'Artigos em retalho',
                l_code: '3456789'
            },
            {
                l_id: 6,
                l_local_1: 'Armazém 6',
                l_description: 'Materiais cerâmica',
                l_code: '9876543'
            },
            {
                l_id: 7,
                l_local_1: 'Armazém 7',
                l_description: 'Materiais para reuso',
                l_code: '4567890'
            },
            {
                l_id: 8,
                l_local_1: 'Armazém 8',
                l_description: 'Ferragens',
                l_code: '0987654'
            },
            {
              l_id: 9,
                l_local_1: 'Armazém 9',
                l_description: 'Conjunto de móveis',
                l_code: '5678901'
            },
            {
                l_id: 10,
                l_local_1: 'Armazém 10',
                l_description: 'Artigos variados',
                l_code: '1098765'
            },
            {
                l_id: 11,
                l_local_1: 'Corredor 1',
                l_description: 'Materiais e Artigos de madeira',
                l_code: '1234567'
            },
            {
                l_id: 12,
                l_local_1: 'Corredor 2',
                l_description: 'Materiais eletrònicos',
                l_code: '7654321'
            },
            {
                l_id: 13,
                l_local_1: 'Corredor 3',
                l_description: 'Móveis',
                l_code: '2345678'
            },
            {
                l_id: 14,
                l_local_1: 'Corredor 4',
                l_description: 'Artigos variados',
                l_code: '8765432'
            },
            {
                l_id: 15,
                l_local_1: 'Corredor 5',
                l_description: 'Artigos em retalho',
                l_code: '3456789'
            },
            {
                l_id: 16,
                l_local_1: 'Corredor 6',
                l_description: 'Materiais cerâmica',
                l_code: '9876543'
            },
            {
                l_id: 17,
                l_local_1: 'Corredor 7',
                l_description: 'Materiais para reuso',
                l_code: '4567890'
            },
            {
                l_id: 18,
                l_local_1: 'Corredor 8',
                l_description: 'Ferragens',
                l_code: '0987654'
            },
            {
                l_id: 19,
                l_local_1: 'Corredor 9',
                l_description: 'Conjunto de móveis',
                l_code: '5678901'
            },
            {
                l_id: 20,
                l_local_1: 'Corredor 10',
                l_description: 'Artigos variados',
                l_code: '1098765'
            },
            {
                l_id: 21,
                l_local_1: 'Prateleira 1',
                l_description: 'Materiais e Artigos de madeira',
                l_code: '1234567'
            },
            {
                l_id: 22,
                l_local_1: 'Prateleira 2',
                l_description: 'Materiais eletrònicos',
                l_code: '7654321'
            },
            {
                l_id: 23,
                l_local_1: 'Prateleira 3',
                l_description: 'Móveis',
                l_code: '2345678'
            },
            {
                l_id: 24,
                l_local_1: 'Prateleira 4',
                l_description: 'Artigos variados',
                l_code: '8765432'
            },
            {
                l_id: 25,
                l_local_1: 'Prateleira 5',
                l_description: 'Artigos em retalho',
                l_code: '3456789'
            },
            {
                l_id: 26,
                l_local_1: 'Prateleira 6',
                l_description: 'Materiais cerâmica',
                l_code: '9876543'
            },
            {
                l_id: 27,
                l_local_1: 'Prateleira 7',
                l_description: 'Materiais para reuso',
                l_code: '4567890'
            },
            {
                l_id: 28,
                l_local_1: 'Prateleira 8',
                l_description: 'Ferragens',
                l_code: '0987654'
            },
            {
                l_id: 29,
                l_local_1: 'Prateleira 9',
                l_description: 'Conjunto de móveis',
                l_code: '5678901'
            },
            {
                l_id: 30,
                l_local_1: 'Prateleira 10',
                l_description: 'Artigos variados',
                l_code: '1098765'
            },
        ],
        locations_l2: [
        ],
        locations_l3: [
        ],
        locations_columns: [{
                name: "action_button",
                align: "left",
                field: "action_button",

                required: true,
            },
            {
                name: "l_local_1",
                label: "Localização",
                align: "left",
                field: "l_local_1",
                sortable: true,
                required: true,
            },
            {
                name: "l_description",
                label: "Descrição",
                align: "left",
                field: "l_description",
                sortable: true,
                required: true,
            }
        ],
        categories_l1: [{
                c_description: 'Material',
                c_id: 1
            },
            {
                c_description: 'Móveis',
                c_id: 2
            },
            {
                c_description: 'Peças Suplentes',
                c_id: 3
            },
            {
                c_description: 'Eletrónico',
                c_id: 4
            },
            {
                c_description: 'Acessórios',
                c_id: 5
            },
            {
                c_description: 'Equipamentos',
                c_id: 6
            },
            {
                c_description: 'Ferramentas',
                c_id: 7
            }
        ],
        categories_l2: [{
                c_id: 1,
                c_description: 'Bosch'
            },
            {
                c_id: 2,
                c_description: 'Einhell'
            },
            {
                c_id: 3,
                c_description: 'HANS'
            },
            {
                c_id: 4,
                c_description: 'DEWALT'
            },
            {
                c_id: 5,
                c_description: 'DEXTER'
            },
            {
                c_id: 'Corredor 6',
                c_description: 'YATO'
            },
            {
                c_id: 6,
                c_description: 'MAKITA'
            },
            {
                c_id: 7,
                c_description: 'BRUDER'
            }
        ],
        categories_l3: [{
                c_id: 1,
                c_description: 'madeira'
            },
            {
                c_id: 2,
                c_description: 'pedra'
            },
            {
                c_id: 3,
                c_description: 'betão'
            },
            {
                c_id: 4,
                c_description: 'ferro'
            },
            {
                c_id: 5,
                c_description: 'alumínio'
            },
            {
                c_id: 6,
                c_description: 'variados'
            },
            {
                c_id: 7,
                c_description: 'acessórios'
            }
        ],
    }),
    getters: {},
    actions: {},
    persist: false
})
