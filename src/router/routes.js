const routes = [{
        path: '/',
        component: () =>
            import ('layouts/HomeLayout.vue'),
        children: [{
            path: '',
            name: 'LoginPage',
            component: () =>
                import ('pages/Login.vue')
        }]
    },
    {
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: 'home',
                name: 'HomePage',
                component: () =>
                    import ('pages/Home.vue')
            },
            {
                path: 'activity',
                name: 'MovementPage',
                component: () =>
                    import ('pages/MovementPage.vue')
            },
            {
                path: 'inventory',
                name: 'InventoryPage',
                component: () =>
                    import ('pages/InventoryPage.vue')
            },
            {
                path: 'itens',
                name: 'ProductPage',
                component: () =>
                    import ('pages/ProductPage.vue')
            },
            {
                path: 'location',
                name: 'LocationPage',
                component: () =>
                    import ('src/pages/LocationPage.vue')
            },
            {
                path: 'categories',
                name: 'CategoryPage',
                component: () =>
                    import ('pages/CategoryPage.vue')
            },
            {
                path: 'users',
                name: 'UserPage',
                component: () =>
                    import ('pages/UserPage.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/ErrorNotFound.vue')
    }
];

export default routes
