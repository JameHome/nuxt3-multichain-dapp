<template>
  <main class="max-w-[1686px] mx-auto my-0 flex items-stretch gap-[10px] md:gap-[20px]">
    <client-only>
      <button @click="connectHandle">连接</button>
      <button @click="connectSolanaHandle">连接solana</button>
      <div>{{ 'address:' + accountData?.address.value }}</div>
      <div>{{ 'chainId:' + accountData?.chainId.value }}</div>
    </client-only>
  </main>
</template>

<script setup lang="ts">
import { useConnect, useSignMessage } from '@wagmi/vue'
import { injected } from '@wagmi/connectors'
import { useConfig } from '@wagmi/vue'
import { useAccount } from '@wagmi/vue'
// const solana = useSolana()
// 确保在客户端使用 Buffer
const accountData = useAccount()
const config = useConfig()
console.log('Wagmi config:', config)
console.log('Wagmi ChainArray:', config.chains)
console.log('config.state.chainId:', config.state.chainId)
const { connectAsync } = useConnect()
const { signMessageAsync } = useSignMessage()
// const { connect } = useSolanaWallet()
const connectHandle = async () => {

  console.log('连接')
  const res = await connectAsync({ connector: injected() })
  console.log('连接结果:', res)
  if (res.accounts) {
    // 连接成功后可以进行其他操作，比如签名消息
    const message = 'Hello, this is a test message!'
    const signature = await signMessageAsync({ message })
    console.log('用户:', accountData)
    console.log('签名结果:', signature)
  }
  // 连接钱包逻辑
  console.log('连接钱包')
}

const connectSolanaHandle = async () => {
  // 连接 Solana 钱包逻辑
  console.log('连接 Solana 钱包')
  connectSol()
  // const conRes = await connect()
  // console.log('连接 Solana 钱包conRes:', conRes)

  // const signRes = await signSol('Hello, this is a test message for Solana!')
  // console.log('连接 Solana 钱包signRes:', signRes)

  // 这里可以使用 solana-wallets-vue 或其他库来连接 Solana 钱包
}
const connectSol = () => {
  // solana.connect()
}

const disconnectSol = () => {
  // solana.disconnect()
}

</script>
<style scoped>
/* 添加一些动画效果 */
.cursor-pointer:hover {
  filter: brightness(1.1);
}

.elastic-enter-active,
.elastic-leave-active {
  transition: opacity 0.3s;
}

.elastic-enter-from,
.elastic-leave-to {
  opacity: 0;
}

.elastic-enter-to,
.elastic-leave-from {
  opacity: 1;
}

/* 弹性缩放动画 */
.elastic-img {
  animation: elastic-scale-in 0.5s cubic-bezier(.68, -0.55, .27, 1.55);
}

@keyframes elastic-scale-in {
  0% {
    transform: scale(0.7, 0.7) skew(18deg, 18deg);
    opacity: 0;
  }

  60% {
    transform: scale(1.08, 1.08) skew(-4deg, -4deg);
    opacity: 1;
  }

  80% {
    transform: scale(0.96, 0.96) skew(2deg, 2deg);
  }

  100% {
    transform: scale(1, 1) skew(0, 0);
  }
}

.profit-move-enter-active {
  transition: transform 1s cubic-bezier(.68, -0.55, .27, 1.55), opacity 1s;
}

.profit-move-enter-from {
  transform: translateY(-80px);
  opacity: 0;
}

.profit-move-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.profit-move-move {
  transition: transform 1s cubic-bezier(.68, -0.55, .27, 1.55);
}
</style>