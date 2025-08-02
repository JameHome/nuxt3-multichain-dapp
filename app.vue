<template>
  <div class="app-container">
    <NuxtRouteAnnouncer />

    <UApp :toaster="{
      duration: 2000,
      position: 'top-center', progress: false, ui: {
        base: '',
        viewport: '',
      }
    }">
      <!-- <UToaster position="bottom-left" :expand="true" :duration="2000" /> -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
// import { Buffer } from 'buffer';
// import BN from 'bn.js';
// import EventEmitter3 from 'eventemitter3';
// import * as BN from 'bn.js';
// import * as locales from '@nuxt/ui/locale'
// import { useI18n } from 'vue-i18n'
// import { UToast } from '#components'
// import { createGlobalSSE, listenSSE } from '~/utils/sse'
// import { useSignByParamsClient } from '~/utils/cryptoSign'

// const toast = useToast()
// const { locale, t } = useI18n()
// const uiLocale = computed(() => locales[locale.value])
// // import { isClient } from '#imports'
// const config = useRuntimeConfig()Connection 
// const projectId = config.public.projectId || ''
// const globalStore = useGlobalStore()
const solana = useSolana()

onMounted(async () => {
  solana.getWallet()
})
// eip155:1 1
// if (import.meta.client) {

//   watch(() => globalStore.walletAddress, (val) => {
//     if (val && !globalStore.isWalletConnected) {
//       // 如果有钱包地址但未连接，执行登录
//       // globalStore.setLoginStatus(true)
//     }
//   }, { immediate: true })
// }


// function setupSSE() {
//   const config = useRuntimeConfig()
//   const apiBase = config.public.apiBase
//   const { sign, timestamp } = useSignByParamsClient({
//   })
//   const params = new URLSearchParams({
//     sign: String(sign),
//     timestamp: String(timestamp)
//   }).toString()

//   createGlobalSSE(apiBase, params, globalStore.token ?? undefined)
// }


// // }

// onMounted(() => {
//   // 监听是否含有token连接sse
//   watch(() => globalStore.token, (newToken, oldToken) => {
//     console.log('Token变化了:', newToken, oldToken)
//     if (newToken) {
//       setupSSE()
//     }
//   }, { immediate: true })
// })

// 如果 uid 可能后续才获取，建议 watch


// })
</script>

<style>
.custom-dropdown-bg {
  background: linear-gradient(to left,
      rgba(18, 18, 18, 0.25),
      rgba(15, 15, 36, 0.92)),
    #000 !important;

  /* --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor); */

}

.custom-dropdown-bg {
  --tw-ring-color: rgba(39, 39, 39, 1) !important;
}

button.brand-button {
  /* 使用 CSS 变量，允许被覆盖 */
  background-color: var(--brand-bg, rgba(79, 82, 255, 0.92));
  color: var(--brand-text, white);
  --tw-ring-shadow: none;
  box-shadow: none;
  padding: var(--brand-padding, 14px 20px);
  font-size: var(--brand-font-size, 15px);
  font-weight: var(--brand-font-weight, normal);
  border-radius: var(--brand-radius, 13px);
  transition: all 0.2s ease;
}

button.brand-button:hover,
button.brand-button:active,
button.brand-button:focus {
  background-color: var(--brand-bg-hover, rgba(101, 104, 255, 0.92));
}

/* 可以通过 CSS 变量覆盖的示例类 */
.brand-button-outline {
  --brand-bg: transparent;
  --brand-text: rgba(79, 82, 255, 1);
  border: 1px solid rgba(79, 82, 255, 0.5);
}

.brand-button-small {
  --brand-padding: 8px 16px;
  --brand-font-size: 12px;
}

body {
  background-color: #000;
  color: white;
  /* Optionally set default text color to white for better contrast */
  font-family: Helvetica;
}

.app-container {
  background-color: #000;
}

.m-container {
  max-width: 1112px;
  margin: 0 auto;
}
</style>
