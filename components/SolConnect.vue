<script lang="ts" setup>
import { WalletMultiButton, useWallet } from "solana-wallets-vue";
// import { MetaMaskWalletName } from "@solana/wallet-adapter-wallets";
const { wallet, wallets, cluster, publicKey, ready, readyState, connected, connecting, disconnecting, connect, select, disconnect } = useWallet();

console.log("WalletMultiButton:", wallets, cluster, wallet);
console.log("ready:", publicKey, ready.value, readyState.value);
console.log("connected:", connected.value, connecting.value);
const connectMetamaskSol = async () => {
    console.log("metamask连接solana");
    try {
        console.log("开始连接钱包");
        const selRes = select('MetaMask'); // 选择第一个钱包
        console.log("选择钱包结果:", selRes);
        const res = await connect()
        console.log("连接结果:", res);
    } catch (error) {
        console.error("连接钱包失败:", error);
    }
};

const isConnected = computed(() => {
    console.log("connected.value:", connected.value);
    return connected.value ? connected.value : '未连接';
});

const isDisconnecting = computed(() => {
    console.log("disconnecting.value:", disconnecting.value);
    return disconnecting.value ? disconnecting.value : '未连接';
});


const address = computed(() => {
    console.log("publicKey.value:", publicKey.value);
    return publicKey.value ? publicKey.value.toString() : '未连接';
});

watch(() => publicKey.value, (newWallet) => {
    console.log("钱包变化:", newWallet);
}, { immediate: true });


watch(() => [connected.value, connecting.value, disconnecting.value], ([newConnected, newConnecting, newDisconnecting]) => {
    console.log("钱包变化狀態:", { newConnected, newConnecting, newDisconnecting });
}, { immediate: true });

</script>

<template>
    <div class="flex items-center space-x-4">
        <div>{{ address }}</div>
        <div>{{ publicKey?.value || '' }}</div>
        <div>connecting: {{ isConnected.value }}，disconnecting: {{ isDisconnecting.value }}</div>
        <UButton class="" @click="connectMetamaskSol">metamask连接solana</UButton>
        <UButton @click="disconnect">断开连接</UButton>
        <WalletMultiButton />

    </div>
</template>