// 确保使用 import.meta.server/client 之前命名好
import { defineNuxtPlugin } from '#app'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin(nuxtApp => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { staleTime: 10000 } }
    })
    nuxtApp.vueApp.use(VueQueryPlugin, { queryClient })
})
