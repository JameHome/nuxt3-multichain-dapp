import { defineNuxtPlugin } from '#app'
import { WagmiPlugin } from '@wagmi/vue'
import { mainnet, bsc, base, sepolia } from '@wagmi/vue/chains'
import { injected, metaMask } from '@wagmi/vue/connectors'
import { createConfig, http } from '@wagmi/vue'

const config = createConfig({
  // autoConnect: true,
  chains: [mainnet, sepolia, bsc, base],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http(),
    [base.id]: http(),
  },
  connectors: [injected(), metaMask()],
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(WagmiPlugin, { config })
})

