export default defineAppConfig({
    ui: {
        colors: {
            lucky: 'purple',
            transparent: 'transparent',
        },
        button: {

            slots: {
                base: 'font-normal',
            }
        },
        app: {
            toaster: false
        },
        toast: {
            slots: {
                root: 'bg-[rgba(23,21,26,1)] text-white ring-0 ring-transparent',
                title: 'text-white',
            }
        },
        table: {
            slots: {
            }
        }
    },
    app: {
        version: '1.0.0',
        description: 'A multilingual web application',

        // 品牌配置
        brand: {
            primaryColor: '#7578FF',
            logo: '/logo.svg',
            favicon: '/favicon.ico'
        },

        // 布局配置
        layout: {
            maxWidth: '1112px',
            navbar: {
                height: '64px',
                background: 'black'
            }
        },


    }
})