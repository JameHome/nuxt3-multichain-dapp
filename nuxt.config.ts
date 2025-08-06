// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  router: {
  },
  routeRules: {
  },
  compatibilityDate: '2025-05-15',
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],
  // 使用 Nuxt Icon 自定义UIcon 指定路径
  icon: {
  },


  ui: {
    fonts: false, // 禁用 Google Fonts 获取
    theme: {
      colors: [
        'primary',
        'secondary',
        'lucky',
        'transparent', // 添加透明色
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  },

  // Vite 配置
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
      sourcemap: false // 禁用 sourcemap 以避免警告
    },
    css: {
      devSourcemap: false // 禁用 CSS sourcemap
    },
    ssr: {
      // noExternal: ['@solana/web3.js', 'jayson']
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "esnext",
      },
      // exclude: ['@solana/web3.js'],
      include: [
        "@coral-xyz/anchor",
        '@solana/web3.js',
        '@solana/wallet-adapter-base',
        'eventemitter3', '@solana/wallet-adapter-phantom',
        '@solana/wallet-adapter-vue',
        'buffer',
        'bn.js',
        'borsh',
        'jayson'
      ]
    },
    define: {
      "process.env.BROWSER": true,
    }
  },

  // 构建配置
  build: {
    transpile: [
      '@headlessui/vue',
      // '@solana/web3.js',
      // '@solana/wallet-adapter-base',
      // '@solana/wallet-adapter-vue',
      // '@solana/wallet-adapter-wallets',
      // '@solana/wallet-adapter-phantom',
      // '@solana/wallet-adapter-bitkeep',
      // '@solana/wallet-adapter-bitpie',
      // '@solana/wallet-adapter-clover',
      // '@solana/wallet-adapter-avana',
      // '@solana/wallet-adapter-alpha'
    ], // 转译可能有问题的依赖
  },

  // 5. 服务端渲染模式
  ssr: true,
  // 实验性功能配置
  experimental: {
    payloadExtraction: false // 减少构建警告
  },

  // Nitro 配置
  nitro: {
    experimental: {
      wasm: false // 禁用 WASM 实验性功能
    },
    rollupConfig: {
      external: [
        'borsh',
        'util',
        'secp256k1',
        '@solana/web3.js',
        '@solana/wallet-adapter-phantom',
        '@solana/wallet-adapter-base'
      ],
    }
  },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
  },
  devServer: {
    host: '0.0.0.0',  // 同时允许 localhost 和 IP 地址访问
    port: 3000       // 使用默认端口或指定其他端口
  }
})