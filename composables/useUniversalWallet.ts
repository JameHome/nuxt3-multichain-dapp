// import { useSignMessage, useSendTransaction } from 'wagmi/vue'
// import { useWallet } from 'solana-wallets-vue'
import { onMounted, ref } from 'vue'
import { toHex } from '~/utils' // 假设你有一个 hexUtils.js 文件来处理 Uint8Array 转换
export function useUniversalWallet() {
    // // const evmSign = useSignMessage()
    // // const evmSend = useSendTransaction()
    // const sol = useWallet()
    // const useSol = ref(false)

    // onMounted(() => {
    //     if (window.ethereum?.isMetaMask && window.ethereum.networkVersion /* 可以进一步检测 solana network 切换 */) {
    //         useSol.value = true
    //     }
    // })

    // async function signMessage(message: string) {
    //     console.log('Signing message:', message,)
    //     if (useSol.value && sol.signMessage?.value) {
    //         const encoder = new TextEncoder()
    //         const uint8Message = encoder.encode(message)
    //         const signature = await sol.signMessage.value(uint8Message)
    //         const sigHex = toHex(signature)
    //         return sigHex
    //     }

    //     // return await evmSign.signMessage({ message })
    // }

    // async function sendTransaction(tx: any, connection?: any) {
    //     if (useSol.value && sol.sendTransaction && connection) {
    //         return await sol.sendTransaction(tx, connection)
    //     }
    //     // return await evmSend.sendTransaction({ request: tx })
    // }

    // return { signMessage, sendTransaction, sol }
}
